import { ThemedText } from "@/presentation/components/shared/ThemedText"
import ThemedPressable from "@/presentation/components/shared/ThemePressable"
import { usePermissionsStore } from "@/presentation/store/usePermissions"
import { View, Text, Pressable } from "react-native"
const PermissionScreen = () => {
   const {locationStatus, requestLocationPermission} = usePermissionsStore()

   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <ThemedPressable
            onPress={requestLocationPermission}
         >
            Habilitar Ubicacion
         </ThemedPressable>

         <ThemedText>Estado Actual: {locationStatus}</ThemedText>
      </View>
   )
}
export default PermissionScreen
