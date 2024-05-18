function test_rst(){
    let Test_Element=document.body.querySelector('.js_button');
    let Result_Element=document.body.querySelector('.result');
    let Test_result=Test_Element.classList.contains('js_button');
    Result_Element.innerHTML=`${Test_result}`;
}
function color_change(btn_name){
    const Btn_Element=document.querySelector(btn_name); 
    if(!Btn_Element.classList.contains('istoogled')){
        Btn_Element.classList.add('istoogled');
    }
    else{
        Btn_Element.classList.remove('istoogled');
    }
}
function color_changes(btn_name){
    const Btn_Element=document.querySelector(btn_name); 
    if(!Btn_Element.classList.contains('istoogled')){
        other_toogleoff();
        Btn_Element.classList.add('istoogled');
    }
    else{
        Btn_Element.classList.remove('istoogled');
    }
}
function other_toogleoff(){
        const previous_btn=document.querySelector('.istoogled');
        if(previous_btn){
            previous_btn.classList.remove('istoogled');
        }
}

function calculate() {
    const amount = document.querySelector(".amount");
    const display = document.querySelector(".display");
    if (Number(amount.value) < 0) {
      display.innerHTML = `<p style="color:red;">Error: cost cannot be less than $0</p>`;
    } else {
      display.innerHTML = `Total cost is :$${amount.value}`;
    }
  }