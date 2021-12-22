# Nx

This project was generated using [Nx](https://nx.dev).

# Directory Structure 

```sh
.
├── README.md
├── apps # individual frontend apps
│   ├── mobile-patients # react-native
│   ├── mobile-patients-e2e
│   ├── mobile-providers # react-native
│   ├── mobile-providers-e2e
│   ├── web-patients # nextjs
│   ├── web-patients-e2e 
│   ├── web-providers # nextjs
│   └── web-providers-e2e
├── babel.config.json
├── jest.config.js
├── jest.preset.js
├── libs # shared code between apps
│   ├── data-access # business logic
│   ├── feature-biometrics # feature
│   ├── feature-sentry # feature
│   ├── ui-mobile # ui
│   ├── ui-tokens # ui
│   ├── ui-web # ui 
│   └── util-testing # testing
├── nx.json
├── package-lock.json
├── package.json
├── tools
│   ├── generators
│   └── tsconfig.tools.json
├── tsconfig.base.json
└── workspace.json
```

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
npx nx serve web-providers
npx nx serve web-providers --prod
```

# Todo

- [x] web components
- [ ] fix ios
- [ ] token px
- [ ] redux
- [ ] darkmode
- [ ] navigation
- [ ] todos example
- [ ] publishable libs
- [ ] tsc and next lint
