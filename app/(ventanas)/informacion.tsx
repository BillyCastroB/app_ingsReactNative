import styled from "styled-components/native";
import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function informacion (){

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
        <Formulario>
            <TitluFormulario>INFORMACIÓN GENERAL</TitluFormulario>
            <Linea/>
            <Subtitulo>N° CIP</Subtitulo>
            <Descripcion>75046</Descripcion>
            <Linea/>
            <Subtitulo>Condicion:</Subtitulo>
            <Descripcion>ORDINARIO</Descripcion>
            <Linea/>
            <Subtitulo>DNI:</Subtitulo>
            <Descripcion>70784215</Descripcion>
            <Linea/>
            <Subtitulo>Apellidos:</Subtitulo>
            <Descripcion>CASTRO BULLON</Descripcion>
            <Linea/>
            <Subtitulo>Nombres:</Subtitulo>
            <Descripcion>BILLY</Descripcion>
            <Linea/>
            <Subtitulo>Fecha de Nacimiento:</Subtitulo>
            <Descripcion>20/12/1999</Descripcion>
            <Linea/>
            <Subtitulo>Sexo:</Subtitulo>
            <Descripcion>MASCULINO</Descripcion>

        </Formulario>
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
const Linea = styled.View`
    height: 1;
    background-color: black;
    margin: 5px 0;
`
const Formulario = styled.View`
    background-color: white;
    margin: auto;
    width: 90%;
    border-radius: 20px;
    elevation: 5;
    padding: 10px;
    height: 78%;
`
const TitluFormulario = styled.Text`
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
`
const Subtitulo = styled.Text`
    color: #6d6d6ddd;
    font-weight: bold;
    font-size: 17px;
    font-weight: bold;
    margin: 8px 10px;
`
const Descripcion = styled.Text`
    color: #000000dd;
    font-weight: bold;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 10px;
`
