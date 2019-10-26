// Copyright 2018 Prescryptive Health Inc

import React from "react";

import renderer from "react-test-renderer";

import { ISortButtonProps, SortButton } from "./sort-button";

jest.mock("../../image-asset/image-asset");

const sortButtonCallBack = jest.fn();

const sortButtonProps: ISortButtonProps = {
   onPress: sortButtonCallBack,

   sortBy: "Price"
};

afterEach(() => {
   sortButtonCallBack.mockClear();
});

describe("SortButton component", () => {
   it("should have sort option", () => {
      const sortButton = renderer.create(
         <SortButton
            onPress={sortButtonProps.onPress}
            sortBy={sortButtonProps.sortBy}
         />
      );

      expect(
         sortButton.root.findByProps({ sortBy: sortButtonProps.sortBy }).props
            .sortBy
      ).toBe(sortButtonProps.sortBy);
   });

   it("should sort items accordingly on SortButton click", () => {
      const sortButton = renderer.create(
         <SortButton
            onPress={sortButtonProps.onPress}
            sortBy={sortButtonProps.sortBy}
         />
      );

      sortButton.root
         .findByProps({ onPress: sortButtonProps.onPress })
         .props.onPress();

      expect(sortButtonCallBack).toHaveBeenCalled();
   });

   it("renders correctly with snapshot", () => {
      const sortButton = renderer.create(
         <SortButton
            onPress={sortButtonProps.onPress}
            sortBy={sortButtonProps.sortBy}
         />
      );

      expect(sortButton.toJSON()).toMatchSnapshot();
   });
});

// Copyright 2018 Prescryptive Health Inc

import React from "react";

import renderer from "react-test-renderer";

import {
   BaseModal,
   IBaseModalProps
} from "../../../components/modal/base-modal/base-modal";

import { ConnectedLoginSuccessfulModal } from "../../../components/modal/login-modal/login-successful-modal.connected";

import { ConnectedWhereIsMyAddressModal } from "../../../components/modal/where-is-my-address-modal/where-is-my-address-modal.connected";

import { PrimaryTextBox } from "../../../components/text/primary-text-box/primary-text-box";

import { ModalLoadingScreen } from "../modal-loading-screen/modal-loading-screen";

import { ModalPopupNames } from "../store/modal-popup/modal-popup-names";

import {
   IModalScreenActionProps,
   IModalScreenProps,
   ModalScreen
} from "./modal-screen";

jest.mock("../../../components/image-asset/image-asset");

jest.mock(
   "../../../components/modal/where-is-my-address-modal/where-is-my-address-modal.connected"
);

jest.mock(
   "../../../components/modal/login-modal/login-successful-modal.connected"
);

jest.mock("../modal-loading-screen/modal-loading-screen");

jest.mock("../../../components/modal/login-modal/login-successful-modal");

const SpinnerMock = <div title="mock-splash" />;

jest.mock("native-base", () => ({
   Spinner: () => SpinnerMock
}));

describe("Modal screen", () => {
   it("should have BaseModal with the props", () => {
      const modalScreenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.addressModal,

         showCloseButton: true
      };

      const modalScreen = renderer.create(
         <ModalScreen {...modalScreenProps} />
      );

      const baseModalProps = modalScreen.root.findByType(BaseModal)
         .props as IBaseModalProps;

      expect(baseModalProps.closeModal).toBe(modalScreenProps.closeModalPopup);

      expect(baseModalProps.showCloseButton).toBeTruthy();
   });

   it("should have captions PrimaryTextBox with props", () => {
      const modalScreenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.addressModal,

         modalTitle: "mock-modal-title",

         showCloseButton: true
      };

      const modalScreen = renderer.create(
         <ModalScreen {...modalScreenProps} />
      );

      const primaryButton = modalScreen.root.findByType(PrimaryTextBox);

      expect(primaryButton.props.caption).toBe(modalScreenProps.modalTitle);
   });

   it("should render <ConnectedWhereIsMyAddressModal /> as a modal body", () => {
      const screenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.addressModal,

         modalTitle: "mock-title",

         showCloseButton: true
      };

      const modalScreen = renderer.create(<ModalScreen {...screenProps} />);

      expect(
         modalScreen.root.findAllByType(ConnectedWhereIsMyAddressModal).length
      ).toBe(1);
   });

   it("should render <ConnectedLoginSuccessfulModal /> as a modal body", () => {
      const screenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.loginSuccessModal,

         showCloseButton: true
      };

      const modalScreen = renderer.create(<ModalScreen {...screenProps} />);

      expect(
         modalScreen.root.findAllByType(ConnectedLoginSuccessfulModal).length
      ).toBe(1);
   });

   it("should render <LoadingScreen /> as a modal body", () => {
      const screenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.loadingModal,

         showCloseButton: false
      };

      const modalScreen = renderer.create(<ModalScreen {...screenProps} />);

      expect(modalScreen.root.findAllByType(ModalLoadingScreen).length).toBe(1);
   });

   it("renders ModalScreen correctly with snapshot", () => {
      const modalScreenProps: IModalScreenProps & IModalScreenActionProps = {
         closeModalPopup: jest.fn(),

         modalName: ModalPopupNames.addressModal,

         modalTitle: "Where is my email address?",

         showCloseButton: true
      };

      const modalScreen = renderer.create(
         <ModalScreen {...modalScreenProps} />
      );

      expect(modalScreen.toJSON()).toMatchSnapshot();
   });
});
