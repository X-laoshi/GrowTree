<template>
    <div class="back">
        <div id="auth">
            <div style="height: 80px;height: 80px;align-items: center;justify-content: center">
                <img style="width: 80px;height: 80px" src="../assets/closeeyes.jpg">
            </div>
            <p style="font-family: 微软雅黑; font-weight:1000 ;margin-top: 0"> 申请获得以下权限 </p>
            <form style="text-align: center">
                <input type="checkbox" name="Auths" value="AuthOne"><label>权限一</label>
                <br>
                <input type="checkbox" name="Auths" value="AuthTwo"><label>权限二</label>
                <br>
                <input type="checkbox" name="Auths" value="AuthThree"><label>权限三</label>
                <br>
                <br>
                <button type="submit" style="font-weight:800">同意并允许授权</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Auth",
        data(){
            return{

            }
        }

    }

</script>

<style scoped>
    button{
        box-sizing: border-box;
        text-align:center;
        font-size:1em;
        height:35px;
        border-radius:4px;
        margin: auto auto auto auto;
        border:1px solid #c8cccf;
        background-color:#1dcd2c;
        display:block;
        outline:0;
        padding:0 1em;
        text-decoration:none;
        width:147px;
    }
.back{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #2c3e50;
}
    #auth{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        height: 300px;
        width: 250px;
        background-color: white;
    }

.ui-notice{
    position: relative;
    padding:20px 15px;
    box-sizing: border-box;
}
.ui-notice p{
    color:#333;
    font-weight: 600;
}
.ui-btn-primary{
    background-color: #02cd93;
    border-color:#02cd93;;
}
.ui-notice-btn{
    padding:50px 0px 15px;
}
</style>