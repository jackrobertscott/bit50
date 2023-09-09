#!/bin/bash

# Layout and Structure Components
layout_and_structure=("Page" "Grid" "Matrix" "Cell" "Center" "Container" "Column" "Root" "Row" "Spacer" "Table")

# Text and Media Display Components
text_and_media=("Badge" "Graph" "Heading" "Icon" "Image" "Poster" "Text" "Tooltip" "Card" "List" "Accordion" "Avatar" "Audio" "Video" "Tag" "Label" "Field")

# Input Controls Components
input_controls=("Checkbox" "DatePicker" "TextInput" "RichTextInput" "RadioSelect" "Select" "Slider" "Submit" "TimePicker" "TextArea" "FileInput" "ImageInput" "RatingInput" "MultiSelect" "FileDropZone")

# Navigation & Feedback Components
nav_and_feedback=("BottomBar" "Drawer" "Menu" "Paginator" "Tabs" "Breadcrumb" "Sidebar" "Dialog" "Overlay" "PopOver" "Portal" "Spinner" "Toast" "Progress" "Question" "Tree" "Expander")

# Combine all components into one array
all_components=("${layout_and_structure[@]}" "${text_and_media[@]}" "${input_controls[@]}" "${nav_and_feedback[@]}")

# Loop through all component names and generate TypeScript files
for component in "${all_components[@]}"
do
  # Create a TypeScript file with the component's name
  cat <<EOL >${component}.ts
import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ${component}Props = {
  // props
}

export const ${component}: FC<${component}Props> = ({}) => {
  const theme = useTheme()
  return \$('div', {
    css: {
      // css
    },
    children: [
      // children
    ],
  })
}
EOL

  echo "Generated ${component}.ts"
done

echo "All components generated."
