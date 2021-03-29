# Combined NextJS and Storybook

This is a demo repository for how you can combine a Storybook with a NextJS setup. This is not something that will work with snapshot testing of components out of the box for NextJS as of writing this README.

- NextJS used for all of the React setup.
- Storybook for a demo of the components.
- Snapshot testing with jest with CSS module.
- Storyshots to run tests on all of the stories in the storybook.
- Allows for using the components within the Next applicaiton.


TILLÄGG:
- Disablear SSR genom metoden beskriven här: https://gist.github.com/tannerlinsley/65ac1f0175d79d19762cf06650707830 
- Använder materials-ui från https://github.com/devias-io/material-kit-react, försök att separerar det från projektets egen kod genom att placera det i `theme`-katalogen. Rensning av app-komponent och sidor därifrån
  Tänkar t ex att rootens `components` (som är integrerad med storybook) representerar projketets egna componenter

