package main

import (
	"bufio"
	"bytes"
	"fmt"
	"io/ioutil"
	"strings"
)

type Interviews []*Interview
type Interview struct {
	Name      string
	Questions map[string]string
}

func NewInterview(person string) *Interview {
	return &Interview{
		Name:      person,
		Questions: make(map[string]string),
	}
}
func NewInterviewFromFile(file string) (*Interview, error) {
	ret := &Interview{
		Questions: make(map[string]string),
	}

	data, err := ioutil.ReadFile(file)
	if err != nil {
		return nil, err
	}

	scanner := bufio.NewScanner(bytes.NewBuffer(data))
	scanner.Scan()
	name := scanner.Text()
	if err := scanner.Err(); err != nil {
		return nil, err
	}
	ret.Name = name

	var question string
	for scanner.Scan() {
		str := scanner.Text()
		if strings.HasPrefix(str, "1. ") {
			question = strings.TrimPrefix(str, "1. ")
			question = strings.TrimSpace(question)
		} else if strings.HasPrefix(str, "  ") {
			answer := strings.TrimSpace(str)
			answer = answer[3:]
			ret.Questions[question] += answer + "\n"
		}
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return ret, nil
}

func (i *Interview) PrintDebug() {
	fmt.Println("\n---[ Name:", i.Name, " ]---\n")
	for q, a := range i.Questions {
		fmt.Println("\n-----------------------------------------------------------")
		fmt.Println("Question:", q)
		fmt.Println("-----------------------------------------------------------")
		fmt.Println(a)
	}
}
