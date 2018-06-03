package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

func main() {
	dir := flag.String("dir", ".", "Dir with txt files with interviews")
	output := flag.String("o", "interviews.xls", "Output XLS filename")
	flag.Parse()
	files, err := ioutil.ReadDir(*dir)
	if err != nil {
		log.Fatal(err)
	}

	interviews := make([]*Interview, 0, len(files))
	for _, file := range files {
		if strings.HasSuffix(file.Name(), ".txt") {
			i, err := NewInterviewFromFile(file.Name())
			if err != nil {
				log.Println("[ERROR] Read file:", err)
				continue
			}

			interviews = append(interviews, i)
			//i.PrintDebug()
		}
	}

	err = WriteXLSX(interviews, *output)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Written output to", *output)
}
