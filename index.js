function takeANumber(katzDeliLine, ticketNumber) {
  var ticketNumber = [];
  
  
  katzDeliLine = katzDeliLine.push(ticketNumber[i]);
  return (`Welcome, ${ticketNumber}. You are number ${katzDeliLine} in line.`);
}

//for above Welcome Message, consider using String Interpolation Template Literals? 


function nowServing(katzDeliLine) {
    if (katzDeliLine.length >= 1) {
      return "Currently serving " + katzDeliLine.shift() + ".";
    }
      else {
      return ("There is nobody waiting to be served!");
    }
  
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }
  var nameDisplay = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
  // code block to be executed
  nameDisplay.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  
  return (`The line is currently: ${nameDisplay.join(", ")}`)
}
  

