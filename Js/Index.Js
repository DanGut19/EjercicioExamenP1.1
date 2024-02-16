function sumar(){
    let a = parseInt(document.getElementById('Producto1').value)
    let b = parseInt(document.getElementById('Producto2').value)
    let c = parseInt(document.getElementById('Producto3').value)
    let d = parseInt(document.getElementById('Producto4').value)
    let e = parseInt(document.getElementById('Producto5').value)

    if (a === 0.00){
        error("No aplica descuento")
    } else {
        let operacion = a + b + c + d + e

        if (operacion >= 999.99){

            let Resultado = (a + b + c + d + e)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("0%")
        } 
    }

    if (a === 1000.00){
        error("Si aplica Descuento")
    } else {
        let operacion = a + b + c + d + e

        if (operacion >= 4,999.99){

            let Resultado = (a + b + c + d + e)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("10%")
        }
    }

    if (a === 5000.00){
        error("Si aplica Descuento")
    } else {
        let operacion = a + b + c + d + e

        if (operacion >= 8,999.99){

            let Resultado = (a + b + c + d + e)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("20%")
        }
    }

    if (a === 9000.00){
        error("Si aplica Descuento")
    } else {
        let operacion = a + b + c + d + e

        if (operacion >= 12,999.99){

            let Resultado = (a + b + c + d + e)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("30%")
        }
    }

    if (a === 13000.00){
        error("Si aplica Descuento")
    } else {
        let operacion = a + b + c + d + e

        if (operacion >= 16,999.99){

            let Resultado = (a + b + c + d + e)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("40%")
        }
    }

}

function error(text) {
    Swal.fire({
        icon: "",
        title: "Descuento",
        text: text
    });
}


function Limpiar() {
    document.getElementById('Producto1').value = ''
    document.getElementById('Producto2').value = ''
    document.getElementById('Producto3').value = ''
    document.getElementById('Producto4').value = ''
    document.getElementById('Producto5').value = ''
    document.getElementById('Resultado').value = ''
}