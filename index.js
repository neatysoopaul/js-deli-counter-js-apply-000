var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  var number = 4
  number.push("8")
  katzDeliLine.push(`${name}`);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing (katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  
  if (katzDeliLine.length === 0) {
return 'There is nobody waiting to be served!';
  }
 else
 return 'Currently serving ' + katzDeliLine.shift() + '.';
}

function currentLine (katzDeliLine) {
  let line = 'The line is currently: ';
 let x = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    x.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  
if (katzDeliLine.length === 0) {
  return 'The line is currently empty.';
} else
return line + x.join(", ");
}