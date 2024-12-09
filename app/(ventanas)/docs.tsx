import styled from "styled-components/native";
import { View, Text, Image,Pressable } from "react-native";
import { router } from "expo-router";
export default function docs (){


  return(
    <Container>
        <MenuCabecera>
            <IconoBlanco source={require("../../assets/images/blanco_splash.png")}/>
            <Texto> CIP CD JUNIN </Texto>
            <Pressable 
                onPress={ ()=> router.replace({
                    pathname: "/login"
                })
             }>
                <IconoBlanco source={require("../../assets/images/icono-salir.png")}/>
            </Pressable>
        </MenuCabecera>
        <Section>
            <Contenedor>
                <IconoPago source={require("../../assets/images/icono-pagar.png")}/>
                <TextoGlobo>Compro. de Pago</TextoGlobo>
            </Contenedor>
            <Contenedor2>
                <TextoGlobo2>Certi. de Habilidad</TextoGlobo2>
                <IconoPago source={require("../../assets/images/icono-certificado.webp")}/>
            </Contenedor2>
            <Contenedor>
                <IconoPago source={require("../../assets/images/icono-pagar.png")}/>
                <TextoGlobo>Cert. de Obra</TextoGlobo>
            </Contenedor>
            <Contenedor2>
                <TextoGlobo2>Certi. de Proyecto</TextoGlobo2>
                <IconoPago source={require("../../assets/images/icono-certificado.webp")}/>
            </Contenedor2>
        </Section>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #dae5e6;
`;
const MenuCabecera = styled.View`
    margin-top: 50px;
    height: 60px;
    flex-direction: row;
    background-color: #cf0909;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`
const IconoBlanco = styled.Image`
    width: 40px;
    height: 40px;
`
const Texto = styled.Text`
  text-align: center;
  color: white;
  font-size: 17px;
`
const Section = styled.View`
    justify-content: center;
    height: 80%;
`
const Contenedor = styled.View`
    background-color: #61AB5E;
    margin: 10px auto;
    width: 75%;
    border-radius: 20px;
    elevation: 5;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2px 5px;
`
const Contenedor2 = styled.View`
    background-color: #ffffff;
    margin: 10px auto;
    width: 75%;
    border-radius: 20px;
    elevation: 5;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2px 5px;
`
const IconoPago = styled.Image`
    width: 25px;
    height: 25px;
`
const TextoGlobo = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 2px;
`
const TextoGlobo2 = styled.Text`
    color: #000000;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 2px;
`