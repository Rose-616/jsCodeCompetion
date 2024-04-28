

//question 1
let num=[2,3,-2,4];
function max(num){
   if(num.length<2){
    console.log("array contains only 1 element");
   }
   let maxProduct=num[0]*num[1];
   for(let i=0;i<=num.length;i++){
    for (let j=i+1;j<=Array.length;j++){
        let product =[i]*[j];
        if(product>max){
            max=product;
        }

    }
   }
   return maxProduct;
}
console.log(max(num));
    

//Question 4



var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus == true) {
      console.log( book+" Reading status:TRUE");
    } else
    {
     console.log(book+" Reading status:FALSE");
    }
   }

//QUESTION 5
function amountcoins(amount,coins){
    if(amount==0){
        return [];
    }
    else{
        if(amount>=[coins[0]]){
            left=(amount-coins[0]);
            return [coins[0].concat(amountcoins(left,coins))];
        }
        else{
            coins.shift();
            return amountcoins(amount,coins);
        }
    }

}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
   //QUESTION 2

   let nums=[2,3,4,5];
 
   let target=9;
function returnTarget(nums, target) {
    let ind=[];
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    return [];
}
console.log(returnTarget(nums, target))

//QUESTION 3
function reverse(str,start,end){
   {
    let temp;
    while(start<=end){
        temp=str[start];
        str[start]=str[end];
        str[end]=temp;
        start++;
        end--
    }
   }

}

function reverseword(){
    {
        s=s.split("");
        let start=0;
        for(let end=0;end<s.length;end++){
            if(s[end]==' '){
                reverse(s,start,end)
                start=end+1
            }
        }
        reverse(s,start,s.length-1)
        reverse(s,0,s.length-1)
        return s.join(" ")
    }
}

var s="welcome to js world";
document.write(reverseworld(s));