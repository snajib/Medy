import { MenuButton } from "../Components/Menu-Button";

export const stackNavigatorOptions = {
   navigationOptions: ({ navigation }) => ({
      headerLeft: MenuButton(navigation),
      headerTransparent: "true"
   })
};
