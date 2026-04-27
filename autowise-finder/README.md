# AutoWise Finder

**AutoWise Finder** is a static GitHub Pages web app and AIML 500 portfolio artifact.

It is an AI-assisted decision-support prototype for used car selection. The app asks a buyer for their preferences and ranks vehicles using a transparent scoring model based on:

- Budget fit
- Estimated monthly payment
- Seat requirement
- Reliability
- Resale value
- Mileage risk
- Estimated ownership cost
- Comfort / beauty factor
- Accident and title risk
- Dealer/listing confidence

## Files

- `index.html` - Main web page
- `styles.css` - Visual styling
- `script.js` - Scoring model, questionnaire logic, ranking, export, and search links
- `portfolio-card-snippet.html` - Optional card to paste into your existing portfolio homepage

## How to deploy on GitHub Pages

### Option 1: Add as a folder inside your existing portfolio repo

1. Create a folder named `autowise-finder` in your GitHub Pages repository.
2. Upload these files into that folder:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Visit:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO/autowise-finder/
```

For your current portfolio, it may look like:

```text
https://rcs-indwes-aiml.github.io/autowise-finder/
```

depending on how your repository is configured.

### Option 2: Use as a standalone repository

1. Create a new GitHub repository.
2. Upload all files.
3. Enable GitHub Pages from the repository settings.
4. Set the source to the main branch and root folder.

## Important note

This is not a live dealer scraping tool. It is a responsible decision-support prototype. It can rank built-in sample vehicles and user-entered real listings. It also generates search links for external car platforms.

## Suggested artifact title

**AutoWise Finder: A Decision-Support Tool for Used Car Selection**

## Suggested portfolio description

AutoWise Finder is an interactive decision-support prototype that helps used-car buyers evaluate vehicle options based on budget, reliability, resale value, mileage risk, ownership cost, seating needs, and personal preferences. The tool uses weighted scoring and explainable recommendations to rank vehicles and support more informed buying decisions.
