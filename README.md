# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library
- Tailwind CSS**

### What I learned

This project has helped me discover more of what I can do with Tailwind CSS. Imagine that I've been worrying my head fora very long time on how to create my own custom utilities, components or base styles only to realise that it just as easy as declaring `@layer` for the corresponding tailwind directive Taiwind directives.

So this is how it's done: 

```css
@layer base{
    h1{
        @apply text-3xl font-bold; /*and so on*/
    }
}

@layer component{
    .custom-btn{
        @apply rounded bg-blue-500 shadow shadow-dark; /*and so on*/
    }
}

@layer utilities{
    .dark-brown{
        color: #3b1801;
    }
}
```

## Author

- Github - [Mark Obuobi](https://www.github.com/malonzy)
- Frontend Mentor - [@malonzy](https://www.frontendmentor.io/profile/malonzy)
- Twitter - [@themark_em](https://www.twitter.com/themark_em)

## On a Not-So-serious Note

If you have any project ideas on which you need some help, I'm totally in for it.
