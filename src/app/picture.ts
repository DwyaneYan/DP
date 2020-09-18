import pdf from 'pdfobject'
//返回试验信息中的处理后图片名和图片地址（数组）对象，参数是图片名称字符串以分号分隔
function getname(allName){
  let afterName=[] //图片去掉前缀和后缀的名称数组
  let ImgPathOne=[]//图片地址数组
  if(allName){
    let one=allName.split(";")
    one.pop()//图片全名数组
    let two=[] //去掉后缀的图片名数组
    let length=one.length//图片数
  for(let a=0;a<length;a++){
    let pattern = /\.{1}[a-z]{1,}$/;
        if (pattern.exec(one[a]) !== null) {
          two.push(one[a].slice(0, pattern.exec(one[a]).index));
        } else {
        two.push(one[a]);
      }
      ImgPathOne.push(`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${one[a]}`) //图片全名是否需要url编码
      }
      for(let a=0;a<length;a++)
      {
      let d= two[a].indexOf("_")
      afterName.push(two[a].slice(d+1))
      }

    }
    return {afterName,ImgPathOne}
}
  //处理文件,每个实验项目只应该有一个报告，但如果上传多个报告会全部存进数据库，但只能预览第一个
  //最好在导入的时候如果不是pdf或者多个pdf就禁止导入。
  //再次上传会覆盖之前的报告和全部数据，报告只能是pdf,不然不能预览
  //图片可以导入多个没有限制，但是实验项目的文件夹中文件数量太多也会导入失败
function  common(a){
    if(a){
      //是否会一次返回多个报告名未测试,如果返回多条报告名只取第一个报告预览
      let p= a.slice(0,a.length-1)   ;
      let arr = p.split(";")//报告名数组
      let hz = arr[0].slice(arr[0].lastIndexOf(".")+1) //第一个报告名的后缀名
      if(hz == "pdf"){
     let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${arr[0]}`//指向报告地址,如果不是pdf会直接下载
     pdf.embed(b, "#pdf1")
    }
  }
  }
export {getname,common}