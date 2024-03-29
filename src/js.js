function MyFunction(name,age,role,date){
    this.name=name
    this.age=age
    this.role=role
    this.date=date
  }
  
  
  MyFunction.prototype.callFunc=function(){
    console.log('yes called')
  }
  MyFunction.prototype.date='12/12/2000'
  MyFunction.prototype.myDI='its okay to say cool'
  
  let obj=new MyFunction("Amir",25,"Dev",'12/12/2001')
  let obj1=new MyFunction("Amir1",25,"Dev1",'12/12/1997')
  obj1.name1='saurabh'
  
  
  
  console.log(obj.myDI,'calle')
  console.log(obj1,'called')
  let a='suraj'
  // console.log(a,'surjva')
  
  let dadda={
    eyes:'black'
  }
  let father=Object(dadda)
  // father.eyes='blue'
  
  
  
  let son=Object.create(father)
  son.eyes='blue'
  
  // console.log(son,father,"sone   ")
  
  // let arr=new Array(1,2,3,4)
  
  // console.log(arr,'arr...S')
  function myArray(){
   
   Object.defineProperty(this,'length',{
    value:0,
    writable:true,
    enumerable:false
   })
    for(let i=0;i<arguments.length;i++){
      this[i]=arguments[i]
    }
    this.length=arguments.length
    
  
  }
  let arr=new myArray(1,2,3,4)
  
  
  myArray.prototype.pushed=function(value){
    let index=this.length
    this[index]=value
    this.length++
  
  }
  
  myArray.prototype.poped=function(){
    let index=this.length-1
    delete this[index]
    this.length--
  }
  arr.poped()
  // arr.pushed("b")
  console.log(arr,Object.values(arr),"a111")