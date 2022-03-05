package main

import (
	"fmt"
	"log"
	"net/http"
)

func createRoom(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("hello")
}

func main() {
	port := "4444"

	http.HandleFunc("/createroom", createRoom)

	log.Print("Server starting at localhost:" + port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
