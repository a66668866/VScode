$(function () {
    // 偵測目前 div 的 font-size
    // let currentSize = parseInt($('div').css('fontSize'))
    // alert(currentSize)

    $('#shrink').click(function(){
        changeSize('small')
    })
    $('#enlarge').click(function(){
        changeSize('big')
    })
    function changeSize(size){   // 宣告 + 定義
        let currentSize = parseInt($('div').css('fontSize'))
        
        if(size == 'small'){
            newSize = currentSize - 2
        }else if(size == 'big'){
            newSize = currentSize + 2
        }
        
        $('div').css('fontSize',newSize)
    }
});

// 函數三部曲: 宣告、定義和呼叫
// JS 的宣告和定義寫在一起
/*=====
1 不傳參數，沒有傳回值
function temp(){  // 宣告、定義

}
呼叫: temp()

2 有傳參數，沒有傳回值
function temp(num){

}
呼叫: temp(5)

3 不傳參數，有傳回值
function temp(){
    return 123
}
呼叫: let ans = temp()

4 有傳參數，有傳回值
function temp(num){
    return num * 123
}
呼叫: let ans = temp(5)
=====*/
