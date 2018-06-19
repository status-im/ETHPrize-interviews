package main

import (
	"strings"

	"github.com/tealeg/xlsx"
)

func WriteXLSX(interviews []*Interview, filename string) error {
	file := xlsx.NewFile()
	sheet, err := file.AddSheet("Sheet1")
	if err != nil {
		return err
	}

	// header
	headerRow := sheet.AddRow()
	cell := headerRow.AddCell()
	cell.Value = "Name"

	// style
	style := xlsx.NewStyle()
	style.Alignment.WrapText = true
	style.Alignment.Vertical = "top"

	// known questions
	questionKnown := make(map[string]bool)
	questions := []string{}

	for _, i := range interviews {
		row := sheet.AddRow()
		cell := row.AddCell()
		cell.SetStyle(style)
		cell.Value = i.Name

		// first, add known questions
		for _, q := range questions {
			question := strings.TrimSpace(q)
			a := i.Questions[question]
			cell := row.AddCell()
			cell.SetStyle(style)
			cell.Value = a
		}

		for q, a := range i.Questions {
			if !questionKnown[q] {
				questionKnown[q] = true
				questions = append(questions, q)
				hcell := headerRow.AddCell()
				hcell.SetStyle(style)
				hcell.Value = q

				cell := row.AddCell()
				cell.SetStyle(style)
				cell.Value = a
			}
		}
	}

	err = file.Save(filename)
	return err
}
