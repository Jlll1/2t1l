package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type Message struct {
	Type string `json:"type"`
}

type JoinRoomRequest struct {
	RoomId   string `json:"roomId"`
	Username string `json:"username"`
}

type RoomJoinedEvent struct {
	Type string `json:"type"`
	Room
}

type Room struct {
	RoomId string   `json:"roomId"`
	Users  []string `json:"users"`
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var rooms = make(map[string]Room)

func handleJoinRoomRequest(ws *websocket.Conn) {
	var request JoinRoomRequest
	err := ws.ReadJSON(&request)
	if err != nil {
		log.Fatal(err)
		return
	}

	var room Room

	if request.RoomId == "" {
		roomId := fmt.Sprintf("%d", len(rooms))
		rooms[roomId] = Room{RoomId: roomId, Users: []string{}}
		room = rooms[roomId]
	} else {
		var found bool
		room, found = rooms[request.RoomId]
		if !found {
			log.Fatal(fmt.Sprintf("Attempted to join room with Id %s that doesn't exist", request.RoomId))
			return
		}
	}

	room.Users = append(room.Users, request.Username)
	rooms[room.RoomId] = room
	ws.WriteJSON(RoomJoinedEvent{Type: "RoomJoinedEvent", Room: room})
}

func handleConnection(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Connection Estabilished")

	defer ws.Close()

	for {
		var msg Message
		err := ws.ReadJSON(&msg)
		if err != nil {
			log.Fatal(err)
			break
		}

		switch msg.Type {
		case "JoinRoomRequest":
			handleJoinRoomRequest(ws)
		}
	}
}

func main() {
	port := "4444"

	http.HandleFunc("/app", handleConnection)

	log.Print("Server starting at localhost:" + port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
