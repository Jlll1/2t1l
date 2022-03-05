package main

import (
	"fmt"
	"log"
	"net/http"
)

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
	fmt.Printf("hello")
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
