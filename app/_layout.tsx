import {
   DarkTheme,
   DefaultTheme,
   ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import "react-native-reanimated"

import { useColorScheme } from "@/presentation/hooks/useColorScheme"
import PermissionCheckerProvider from "@/presentation/provider/PermissionCheckerProvider"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
   const colorScheme = useColorScheme()
   const [loaded] = useFonts({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
   })

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync()
      }
   }, [loaded])

   if (!loaded) {
      return null
   }

   return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
         <PermissionCheckerProvider>
            <Stack
               screenOptions={{
                  headerShown: false,
               }}
            >
               <Stack.Screen
                  name="loading/index"
                  options={{ animation: "none" }}
               />
               <Stack.Screen name="map/index" options={{ animation: "fade" }} />
               <Stack.Screen
                  name="permisions/index"
                  options={{ animation: "none" }}
               />
            </Stack>
         </PermissionCheckerProvider>
         <StatusBar style="auto" />
      </ThemeProvider>
   )
}
