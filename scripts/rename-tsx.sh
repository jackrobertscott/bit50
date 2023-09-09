#!/bin/bash

# Loop through all .tsx files in the current directory
for file in *.tsx; do
  # Extract the base name of the file (without extension)
  base_name=$(basename "$file" .tsx)
  
  # Rename the file to have a .ts extension
  mv "$file" "${base_name}.ts"
done
