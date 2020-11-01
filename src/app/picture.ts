import pdf from 'pdfobject'
import {ImgView} from './imgView'
// import {ApiService} from './api.service'
// let ApiServices:ApiService //实例化类
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
      ImgPathOne.push(`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${encodeURIComponent(one[a])}`) //图片全名是否需要url编码
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
function  common(a,callback){
    if(a){
      //是否会一次返回多个报告名未测试,如果返回多条报告名只取第一个报告预览
      let p= a.slice(0,a.length-1)   ;
      let arr = p.split(";")//报告名数组
      let hz = arr[0].slice(arr[0].lastIndexOf(".")+1) //第一个报告名的后缀名

      if(hz == "pdf"){
     let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${encodeURIComponent(arr[0])}`//文件名进行url转码，指向报告地址,如果不是pdf会直接下载
    //  console.log(pdf)
        let options = {
            pdfOpenParams: { scrollbars: '0', toolbar: '0', statusbar: '0'},
            fallbackLink: '您的浏览器暂不支持pdf'
        }
     pdf.embed(b, "#pdf1",options)
     callback([b,arr[0].slice(arr[0].indexOf("_")+1)])
    //  return [b,arr[0].slice(arr[0].indexOf("_")+1)]
    }
  }
  }
  //按钮权限
  function button(p):Boolean{
    let permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
    if(permissions && permissions.permissions && (permissions.permissions.indexOf(`${p}`)!=-1 || permissions.roles.indexOf("admin")!=-1)){
      return true
    }
    else{
      return false
    }
  
  }
//放大、缩小图片
function enlarge(src,ImgPathOne){
  let options = {
                  dataList:ImgPathOne,
                  currentSrc: src
              };
    ImgView("imgView", options);
}
//试验项目信息
 var menu = [{name:"static-tension-home",children:['jtls1','jtls2','jtls3','jtls4'],names:"静态拉伸"},
              {name:"surface-property",children:['bmxn1','bmxn2','bmxn3','bmxn4'],names:"表面性能"},
              {name:"metallographic",children:['jx1','jx2','jx3','jx4'],names:"显微组织"},
              {name:"bake-hardening",children:['hkyh1','hkyh2','hkyh3','hkyh4'],names:"烘烤硬化"},
              {name:"physicalperformance",children:['wlxn1','wlxn2','wlxn3','wlxn4'],names:'物理性能'},
              {name:"chemicalelement",children:['hxcf1','hxcf2','hxcf3','hxcf4'],names:"化学成分"},
              {name:"prohibited-substance",children:['jywz1','jywz2','jywz3','jywz4'],names:'禁用物质'},
              {name:"compression",children:['ys1','ys2','ys3','ys4'],names:"压缩"},
              {name:"fld",children:['fld1','fld2','fld3','fld4'],names:"成型极限"},
              {name:"welding",children:['hjxn1','hjxn2','hjxn3','hjxn4'],names:"焊接性能"},
              {name:"bending",children:['wq1','wq2','wq3','wq4'],names:"弯曲"},
              {name:"dent-resistance",children:['kaxn1','kaxn2','kaxn3','kaxn4'],names:"抗凹性能"},
              {name: "flanging-clasp",children:['fbkh1','fbkh2','fbkh3','fbkh4'],names:"翻边扣合性能"},
              {name:"painting",children:['tzxn1','tzxn2','tzxn3','tzxn4'],names:"涂装性能"},
              {name:"cementing",children:['jjxn1','jjxn2','jjxn3','jjxn4'],names:"胶结性能"},
              {name:"highspeedstrech",children:['gsls1','gsls2','gsls3','gsls4'],names:"高速拉伸" },
              {name:"lowcyclefatigue",children:['dzpl1','dzpl2','dzpl3','dzpl4'],names:"低周疲劳"},
              {name:"highcyclefatigue",children:['gzpl1','gzpl2','gzpl3','gzpl4'],names:"高周疲劳"},
              {name:"rebound",children:['htxn1','htxn2','htxn3','htxn4'],names:"回弹性能"},
              {name:"secondary-working-embrittlement",children:['ecjgcx1','ecjgcx2','ecjgcx3','ecjgcx4'],names:"二次加工脆性"},
              {name:"hydrogen-induced-delayed-fracture",children:['qzyckl1','qzyckl2','qzyckl3','qzyckl4'],names:"氢致延迟开裂"},
            ]
//试验项目折线图的配置项和数据
 function PlotPicture(data, xData, des) {
   let  options = {
        title: {
          text: des,
          x: "center",
          y: "top"
        },
        xAxis: {
          type: "category",
          data: xData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: data,
            type: "line"
          }
        ],
        tooltip : {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
        }  
      };
  return options
    }
 //对象数组按某个属性值分组
function  groupBy(array, f) {
      let groups = {};
      array.forEach(function (o) {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map(function (group) {
        return groups[group];
      });
    }
 //数字数组中的最大值
function  max(arr) {
    return Math.max.apply({}, arr)
  }
    //牌号是否存在，存在返回true
function   exist(num, arr1) {
      for (let j = 0; j < arr1.length; j++) {
        if (num === arr1[j]) {
          return false; //如果传过来的元素在arr1中能找到相匹配的元素，我们返回fasle
        }
      }
      return true; //如果不能找到相匹配的元素，返回true
    }
    //数组分类
function  classitem(arry1, p,key) {
      let arry = [];
      arry1.map((mapItem) => {
        if (arry.length == 0) {
          arry.push({ [key]: mapItem[p], List: [mapItem] });
        } else {
          let res = arry.some((item) => {
            //判断相同highSpeedStrechDataDetailId，有就添加到当前项
            if (item[key] == mapItem[p]) {
              item.List.push(mapItem);
              return true;
            }
          });
          if (!res) {
            //如果没找相同highSpeedStrechDataDetailId添加一个新对象
            arry.push({
              [key]: mapItem[p],
              List: [mapItem],
            });
          }
        }
      });
      return arry;
    }
    //数字数组去重
function unique1(array) {
      let  n = []; //一个新的临时数组
      //遍历当前数组
      for (let i = 0; i < array.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) n.push(array[i]);
      }
      return n;
    }
    //过滤数字数组中的空值
function notempty(a) {
      let arr = [];
      a.map(function (val, index) {
        //过滤规则为，不为空串、不为null、不为undefined，也可自行修改
        if (val !== "" && val != undefined) {
          arr.push(val);
        }
      });
      return arr;
    }
 //化学成分、禁用物质公共方法
async function GetTrialDataDetails(methonName,materialId,ApiServices) {
  let requirement = [] //要求值
  let element = [] //元素名
  let sampleCode = [] //样件编号
  let data = [] //渲染数据
  let trialDataDetail = []
  let groupCode = []
  await ApiServices[methonName](materialId).then((res: any) => {
      trialDataDetail = res;
      if(trialDataDetail.length){
        trialDataDetail[0].dates = ApiServices.handleTime(trialDataDetail[0].dates);
        trialDataDetail[0].dateEnds = ApiServices.handleTime(trialDataDetail[0].dateEnds);
      }
      //返回结果按照元素名称分组
      groupCode = groupBy(trialDataDetail, function (item) {
        return [ item.element];
      })
      let length = groupCode.length
      let arr1 = [] //各元素样本个数
      for (let a = 0; a < length; a++) {
        arr1.push(groupCode[a].length);
        requirement.push(groupCode[a][0].requirement)
        element.push(groupCode[a][0].element)
      }
      (document.getElementsByClassName('tablebox')[0] as HTMLElement).style.width = (120 + element.length * 90) + "px";
      let length2 = max(arr1) 
      for (let a = 0; a < length; a++) {
        if (groupCode[a].length == length2) {
          for (let b = 0; b < length2; b++) {
            sampleCode.push(groupCode[a][b].sampleCode)
          }
          break
        }
      }
      for (let a = 0; a < length; a++) {
        let arrr = [] //各元素样件编号
        for (let d = 0; d < arr1[a]; d++) {
          arrr.push(groupCode[a][d].sampleCode)
        }
        let newArr = []; //各元素不存在的编号名称
        for (let  i = 0; i < length2; i++) {
          //我们将arr2中的元素依次放入函数中进行比较，然后接收函数的返回值
          if (exist(sampleCode[i], arrr)) { //如果返回的值是true，我们将元素放入新的数组中
            newArr[newArr.length] = sampleCode[i];
          }
        }
        let length9 = newArr.length
        for (let f = 0; f < length9; f++) {
          groupCode[a].push({ element: element[a], sampleCode: newArr[f], contentRatio: '' })
        }
        //各元素结果按照样件编号排序
        groupCode[a].sort((a, b) => {
          return sampleCode.indexOf(a.sampleCode) - sampleCode.indexOf(b.sampleCode);
        });
      }
      let after = [].concat.apply([], groupCode); //补齐后的数组
      let afterlength = after.length
      for (let a = 0; a < length2; a++) {
        data[a] = []
        for (let b = a; b < afterlength; b += length2) {
          data[a].push(after[b])
        }
      }
    })
  return {requirement,element,sampleCode,data,trialDataDetail,groupCode}
}
  //点击行中的列项展开信息
 function clickItem(firstTable, tdIdx) {
   console.log(this.activeTdIdx,this.tableCellCls)
    if (!firstTable) {
      return;
    }
    this.activeTdIdx = tdIdx;
    if (this.tableCellCls) {
      this.tableCellCls = "";
    } else {
      this.tableCellCls = "ellipsis";
    }
   console.log(this.activeTdIdx,this.tableCellCls)

  }
export {getname,common,button,enlarge,menu,PlotPicture,groupBy,max,exist,classitem,unique1,notempty,GetTrialDataDetails,clickItem}