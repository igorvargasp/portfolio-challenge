
### The Deployed [Website](portfolio-challenge-gamma.vercel.app)


# Local Development Setup Instructions

First, run:

```bash
npm install
```
Then you need to create a .env file and add this envs:
```bash
API_URL="http://localhost:3000/api"

SMTP_HOST= smtp.gmail.com
SMTP_PORT= 465
SMTP_SERVICE= gmail
SMTP_MAIL= your gmail here
SMTP_PASSWORD= your password here
```
Follow this guide to generate your password [guide](https://support.google.com/accounts/answer/185833?hl=pt-BR)

After the previous steps you can run your local environment:
```bash
npm run dev
```


# Project Structure

```bash

> app
  > api
   > email
      > route.ts
> components
  > Card
   > CarrerCard.tsx
   > StackCard.tsx
  > Footer
   > Footer.tsx
  > Header
   > Header.tsx
  > Sections
   > CarrerSection
      > CarrerSection.tsx
   > ContactSection
      > ContactSection.tsx
   > HeroSection
      > HeroSection.tsx
   > StackSection
      > StackSection.tsx
  > ThemeSwitch
   > ThemeSwitch.tsx
      > ThemeProvider.tsx
> providers
   > ThemeProvider.tsx
> actions
   > actions.tsx
> utils
   > carrerItems.ts
   > navItems.ts
   > stackItems.ts
```


# Project Milestone

## Pages

- Home

## Componentes

- Header - 30 min
- Hero Section 1h
- Stack Section - 1h
- Projects Section - 1h
- Contact - 30 min
- Footer - 10 min


# Functions
 - actions: 10 min
 - api: 10 min
 - switch theme - 30 min

  Total time: 6h  


## Decisions made during the development process.

- Create all the design first
- Implement the design and styles
- Add the form + server actions
- Implement the api
- Added all the reused custom styles and custom width in the tailwind file
- Fix issues
- Update readme file with the development progress.
