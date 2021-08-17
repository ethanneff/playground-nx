# Nx

This project was generated using [Nx](https://nx.dev).

# Install

```sh
npx create-nx-workspace --cli=nx --preset=empty
cd nx
npm install --save-dev @nrwl/react-native
npm install --save-dev @nrwl/next
npm install --save-dev @nrwl/react
npx nx g @nrwl/react-native:app mobile-providers
npx nx g @nrwl/react-native:app mobile-patients
npx nx g @nrwl/next:app web-patients
npx nx g @nrwl/next:app web-providers
npx nx g @nrwl/react-native:lib ui-mobile
npx nx g @nrwl/react:lib ui-web
npx nx g @nrwl/react:lib ui-tokens
npx nx g @nrwl/react:lib util-testing
```

# Run

```sh
npx nx run-android mobile-providers
npx nx run-ios mobile-providers --install
```

# Todo

- [ ] redux
- [ ] darkmode
- [ ] navigation
- [ ] todos example
