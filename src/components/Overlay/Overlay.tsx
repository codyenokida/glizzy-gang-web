import {
  ButtonIcon,
  ButtonIconContainer,
  ButtonText,
  Container,
  StyledButton,
  StyledWalletProviderList,
} from "./Overlay.styles";

import SUPPORTED_WALLET_PROVIDERS from "../../constants/supportedWalletProviders";

const Overlay = ({ onProviderSelected }: any) => {
  return (
    <Container>
      <StyledWalletProviderList>
        {SUPPORTED_WALLET_PROVIDERS.map((provider) => (
          <StyledButton
            key={provider.name}
            onClick={() => onProviderSelected(provider)}
          >
            <ButtonIconContainer>
              <ButtonIcon
                src={provider.logo}
                alt={`${provider.name} logo`}
                className="w-12 h-12"
              />
            </ButtonIconContainer>
            <ButtonText>{provider.name}</ButtonText>
          </StyledButton>
        ))}
      </StyledWalletProviderList>
    </Container>
  );
};

export default Overlay;
