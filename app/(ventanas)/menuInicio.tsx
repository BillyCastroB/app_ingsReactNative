import styled from "styled-components/native";
import { View, Text, TouchableOpacity, Button, Image, ImageBackground } from "react-native";
export default function menuInicio (){

  return(
    <Container>
      <Cabecera>
        <FondoImgCabecera 
          source={require("../../assets/images/fondoRojo.jpg")} 
          resizeMode="cover"
        >
          <Cpi>N° CPI: 2023</Cpi>
          <Nombre>Ing. BILLY CASTRO BULLON </Nombre>
          <Condicion>Su Condición: ORDINARIO </Condicion>
          <Vitalicio>x años para ser Vitalicio</Vitalicio>
        </FondoImgCabecera>
        
      </Cabecera>
      <DivBotones1>
        <Div4>
          <Fila>
            <TituloDiv>Su estado</TituloDiv>
            <IconoCheck source={require("../../assets/images/check.png")}/>
          </Fila>
          <CaracteristicaDiv>Habilitado</CaracteristicaDiv>
        </Div4>
        <Div5>
          <Fila>
            <TituloDiv>Su Deuda</TituloDiv>
            <IconoCheck source={require("../../assets/images/iconoDinero.png")}/>
          </Fila>
          <CaracteristicaDiv>S/ 0.00</CaracteristicaDiv>
        </Div5>
      </DivBotones1>
      <DivBotones2>
        <Div4>
          <Fila>
            <TituloDiv>Ult. Cuota</TituloDiv>
            <IconoCheck source={require("../../assets/images/calendario.png")}/>
          </Fila>
          <CaracteristicaDiv>Habilitado</CaracteristicaDiv>
        </Div4>
        <Div5>
          <Fila>
            <TituloDiv>Hasta</TituloDiv>
            <IconoCheck source={require("../../assets/images/calendario.png")}/>
          </Fila>
          <CaracteristicaDiv>Habilitado</CaracteristicaDiv>
        </Div5>
      </DivBotones2>

    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`;

const Cabecera = styled.View`
  margin-top: 50px;
  height: 150px;
`
const FondoImgCabecera = styled.ImageBackground`
  height: 220px;
  z-index: -1;
`
const Cpi = styled.Text`
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 19px;
  font-weight: bold;
`
const Nombre = styled.Text`
  color: white;
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 2px;
`
const Condicion =  styled.Text`
  text-align: center;
  color: white;
  font-size: 17px;
  margin: 5px 0;
`
const Vitalicio = styled.Text`
  font-size: 16px;
  color: white;
  text-align: center;
`
const DivBotones1 = styled.TouchableOpacity`
  background-color: transparent;
  margin-top: 100px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`
const Div4 = styled.View`
  background-color: white;
  width: 170px;
  height: 110px;
  border-radius: 10px;
  padding: 15px;
`;
const IconoCheck = styled.Image`
  width: 30px;
  height: 30px;
`
const Fila = styled.View`
  flex-direction: row;
  align-items: center;
`
const TituloDiv = styled.Text`
  width: 60%;
  text-align: center;
  font-size: 18px;
`
const CaracteristicaDiv = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`
const Div5 = styled.View`
  background-color: white;
  width: 170px;
  height: 110px;
  border-radius: 10px;
  padding: 15px;
`
const DivBotones2 = styled.TouchableOpacity`
  background-color: transparent;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`