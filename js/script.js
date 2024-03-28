// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function myButtonClicked() {
  // Define the lengths of the three sides of a shape
  const side1 = parseInt(document.getElementById("side-1").value)
  const side2 = parseInt(document.getElementById("side-2").value)
  const side3 = parseInt(document.getElementById("side-3").value)

  // alculate the area of the shape
  const area = Math.sqrt((side1 + side2) / 2) * side3
  const roundArea = Math.round(area * 100) / 100
  
  document.getElementById("answer").innerHTML = "Area is: " + roundArea + " mm²"
}