var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var fre= 1;
var temp = 0, final;

for (i = 0; i < arr1.length; i++) {
  for (j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) 
        temp++;
    if (fre < temp) {
      fre = temp;
      final = arr1[i];
    }
  }
  temp = 0;
}
console.log(final + " ( " + fre + " times ) ");
