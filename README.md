# PagoHorario
Ejercicio realizado en Node JS de una calculadora de sueldo de trabajadores de la empresa ACME en función del cuadro de horas, obtiene la informacion de un archivo de texto y retorna el monto a pagar por trabajador.


# Solución

Se lee el archivo de texto y se toma cada linea como entrada, la trama es separa para obtener el nombre del trabajador y los dias trabajados
Luego de obtenidas las horas se determina a que rango pertenece la hora de inicio y la hora de fin
Si ambas horas pertenecen al mismo rango se hace la diferencia entre la hora fin y la hora incio y se multiplica por el valor por hora del rango
Si las horas de inicio y de finn son de diferentes rangos se realiza el calculo proporcional a cada rango y se retorna el valor total a recibir por dia


## Como iniciar el proyecto

Antes de iniciar este proyecto, es requerido tener instalado Node JS y np:



- Clonar el repositorio: `git clone https://github.com/geodmina/PagoHorario.git`
- Ingresar a la carpeta: `cd PagoHorario`
- Ejecutar el proyecto: `npm run start`

- Entrada :
    - RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    - ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    - GEOVANNY=MO08:00-10:00,FR18:00-19:00,SA03:00-09:00
    - CARLOS=WE09:00-18:00,TH00:00-02:00,FR19:00-22:00,SU19:00-20:00
    - MARIA=WE00:00-02:00,T18:00-19:00,SU20:00-21:00
    - DANIELA=MO00:00-02:00,FR18:00-19:00,SA20:00-21:00

- Salida :

    - El monto a pagar RENE es: 215 USD
    - El monto a pagar ASTRID es: 85 USD
    - El monto a pagar GEOVANNY es: 2620 USD
    - El monto a pagar CARLOS es: 7360 USD
    - El monto a pagar MARIA es: 260 USD
    - El monto a pagar DANIELA es: 2425 USDs


## Desarrollador

- **Geovanny Mina Villegas.** - email: geodmina@hotmail.com
