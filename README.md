# The Reawakening — Gamma Phi Barbados 2027

A static, mobile-first group travel hub built for GitHub Pages.

## Files
- `index.html`
- `styles.css`
- `script.js`

## Publish with GitHub Pages
1. Create or open your GitHub repository.
2. Upload all three files to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save. GitHub will provide the live URL.

## Already connected
- Official group room booking/payment page
- Spring 2002 Google Drive photo folder
- 25th Yearbook Google Form
- Royalton Vessence Barbados official hotel site
- Visit Barbados official travel information
- Travel advisor email and phone

## Still needs links
The interface intentionally marks these as "Coming soon" rather than linking to fake destinations:
- Dinah tribute upload
- Superlatives voting
- Additional "Through the Years" photo upload destination

## Resort photography
The hotel section intentionally contains a clearly labeled placeholder. Replace it with an authentic image you have permission to use.

Recommended approach:
1. Add your image to an `/images` folder, e.g. `images/royalton-vessence.jpg`.
2. Replace the `.photo-placeholder` block in `index.html` with:
   `<img class="hotel-photo" src="images/royalton-vessence.jpg" alt="Royalton Vessence Barbados">`
3. Add to CSS:
   `.hotel-photo{width:100%;height:420px;object-fit:cover;display:block;}`

## Design intent
This is deliberately a utility-first travel portal, not a promotional event page:
- deadlines and tasks first
- compact trip identity
- no fake resort imagery
- no decorative script fonts
- minimal card UI
- mobile payment action stays accessible


## Itinerary status
The trip dates are fixed at April 22–25, 2027, but the event itinerary is intentionally marked **TBD** throughout the site. No tentative activity, time, location, or attire is presented as confirmed.

## GitHub repository
Recommended repository name: `gamma-phi-barbados-2027`
