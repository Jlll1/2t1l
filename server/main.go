package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

var rooms = make(map[string]Room)

type Room struct {
	Id    string   `json:"id"`
	Users []string `json:"users"`
}

type CreateRoomRequest struct {
	Username string `json:"username"`
}

func setHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, cache-control")

		if r.Method == "OPTIONS" {
			return
		}

		next.ServeHTTP(w, r)
	})
}

func createRoom(w http.ResponseWriter, r *http.Request) {
	var roomRequest CreateRoomRequest
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&roomRequest)
	if err != nil {
		log.Fatal("bla bla")
		w.WriteHeader(400)
		return
	}

	roomId := fmt.Sprintf("%d", len(rooms))
	room := Room{Id: roomId, Users: []string{roomRequest.Username}}
	rooms[roomId] = room

	jsonResponse, _ := json.Marshal(room)
	w.WriteHeader(200)
	w.Write(jsonResponse)
}

func main() {
	port := "4444"

	r := http.NewServeMux()
	r.HandleFunc("/createroom", createRoom)

	m := setHeaders(r)

	log.Print("Server starting at localhost:" + port)
	if err := http.ListenAndServe(":"+port, m); err != nil {
		log.Fatal(err)
	}
}
