# The hero film — production brief

The opening sequence: a first-person run that dives into the TPTV television and
falls through a vortex into the website.

**This is not one Runway generation.** It is four clips. Runway holds roughly
one action per clip, and a single prompt covering turn, run, dive and vortex
collapses every beat into mush. Generate them separately and cut them together
— which, for four clips and hard cuts, is a few minutes in Runway's own editor.

## The film

Pure white void throughout. No street, no floor, no horizon, no shadows — the
whole thing happens in empty white space.

1. He stands a few steps ahead with his back to us, turns his head back over his
   **left** shoulder and reaches back with his **left** hand.
2. We run forward together into the white.
3. He dives **head first** into an old black CRT television. The camera follows
   him through the screen.
4. Down a time vortex: the camera looks **right** at a Discord giveaways
   channel, then **left** at YouTube clips, then forward into white.

It opens on white and ends on white, so the website simply fades up out of that
whiteout. There is no landing shot to match and nothing to line up.

## The pipeline

Two tools, three steps. Nothing else.

1. **ChatGPT** — four stills.
2. **Runway** — image-to-video on each still.
3. **Runway** — assemble the four clips, export.

No compositing, no tracking, no grade, no grain, no external editor. The Discord
and YouTube panels inside the vortex are **generated, not composited** — which
is why they are described as shapes rather than interfaces. Lettering garbles in
every image and video model, but a blurple panel with rounded message bubbles
and red play buttons on video rectangles reads instantly, and at vortex speed
nobody could read text anyway.

## The stills — ChatGPT, 16:9

**Attach the character sheet to all four**, including the vortex, where it acts
as a style reference only.

**Do not describe the style in words beyond matching the reference.** The sheet
is smooth soft shading with clean linework and natural colour — not cel shading,
and not flat comic colour. Earlier prompts specified a rendering that fought the
sheet and the results looked worse for it. "Drawn in exactly the same rendering
style as the reference image" is a stronger instruction than any adjective list,
because the reference cannot drift and a description can.

Negative phrasing is fine here; the warning against it applies to Runway's
motion prompts, not to image models.

**1 — The turn**

> The character in the reference image, drawn in exactly the same rendering
> style — smooth soft shading, clean linework, natural colour, same face and
> outfit. He is close to the camera, seen from behind from roughly the waist up,
> turning his head back over his left shoulder to look at the viewer, his left
> arm reaching back toward the camera with the hand open and near the lens. Pure
> white empty background — no floor, no horizon, no shadows, nothing but white.

**2 — The run**

> The character in the reference image, drawn in exactly the same rendering
> style — smooth soft shading, clean linework, natural colour, same face and
> outfit. Seen from behind, running away from the camera into empty white space.
> Far ahead of him an old boxy black CRT television floats at the centre of the
> frame, its curved glass screen showing grey no-signal static. Pure white empty
> background — no floor, no horizon, no shadows.

**3 — The dive**

> The character in the reference image, drawn in exactly the same rendering
> style — smooth soft shading, clean linework, natural colour, same face and
> outfit. Seen from behind, diving head first with both arms stretched forward
> toward a large old boxy black CRT television directly ahead. The television's
> curved glass screen fills much of the frame, showing grey no-signal static.
> Pure white empty background — no floor, no shadows.

**4 — The vortex**

> Looking down the inside of a swirling tunnel of light and colour, drawn in the
> same rendering style as the reference image — smooth soft shading, clean
> linework, natural colour. On the right wall a floating glowing blurple-purple
> chat panel with rounded message bubbles. On the left wall floating video
> rectangles with red play buttons. Bright white light at the far end of the
> tunnel.

## The motion prompts — Runway, image-to-video

Load the still, paste the line. The still already carries subject, colour and
style, so the prompt describes motion and nothing else.

**1 (5s)** `The man turns his head back over his shoulder and reaches his left hand toward the camera. The camera sways gently.`

**2 (5s)** `The man runs forward away from the camera. The camera follows him at running pace. The television ahead grows larger.`

**3 (5s)** `The man dives head first into the television screen and disappears through it. The camera rushes forward after him and passes through the screen into darkness.`

**4 (10s, Gen-4.5)** `The camera flies forward down the tunnel. It turns to look right at the glowing purple chat panel, then turns left to the video screens, then faces forward as the white light ahead grows and fills the frame.`

Shot 4 is three camera moves in one prompt. Gen-4.5 is documented to handle
sequenced camera direction; Gen-4 is not, and will blur the beats together. If
it still comes back confused, split it into two five-second clips — right turn,
then left turn.

## The assembly

Put the four clips in order in Runway's editor and export. Hard cuts throughout;
each shot opens roughly where the last one ended, so they flow without
transitions. Trim the first and last few frames of each clip if they warp —
that is where generated clips are weakest.

Then send the export over and it gets cut to a loop, compressed and wired into
`NEXT_PUBLIC_HERO_VIDEO`, which `src/components/hero-room.tsx` already reads.

## The character sheet

His likeness is settled by a **full-body character turnaround** — front and
three-quarter, same face, same wardrobe — generated in ChatGPT from photographs
of him. That sheet is the reference attached to every still that has him in it,
and it locks build and clothing as well as the face, which a portrait would not.

Getting there took several wrong turns worth not repeating:

- **Ask for accuracy, never caricature.** A model does not exaggerate the
  person, it exaggerates toward an archetype, and you get a brooding handsome
  stranger.
- **Do not stack intensifiers.** "Very thick eyebrows sitting low over his eyes"
  plus "full lips" returns angry brows and a pout, each feature maxed
  independently of the face it belongs to.
- **Strip the style terms that deform faces.** "Heavy black shadow shapes" and
  "saturated comic-book colour" push a face into the style's geometry instead of
  the subject's. Rotoscope language — trace the photograph, keep its proportions
  — does the opposite.
- **References must be head shots, sharp, at eye level, in soft light.** No
  props: an attached photo of an object becomes a subject the model feels
  obliged to draw, and it turns up in every frame.
- **The image stage does not have to happen in Runway.** On this project GPT
  Image held the likeness noticeably better than Runway's own image models.
  Runway only needs a first frame; it does not care what drew it.

If the sheet ever needs regenerating, go back to the photographs rather than to
a generated image — each generation drifts a little further from him.

### The riskiest clip

Clip 1 asks for an open hand near the lens, and hands are the thing these models
are worst at — the closer the hand, the harder it gets. Budget extra takes for
this one specifically, and if the hand keeps coming back mangled, pull him back
from the camera until it holds. A clean hand a step further away beats a
close-up of a claw.

Faces and fingers also hold for roughly the first two seconds of a generation
and drift after. **Keep every clip with him in it to 5 seconds.** The 10 seconds
goes to the vortex, where there is no face to wreck.

## Continuity between clips

Use the **last frame of each clip as the first frame of the next**. That forward
chaining is what makes four clips read as one take, and it is the only
continuity technique this film needs.

**Do not plan on an end-frame keyframe.** Gen-3 Alpha Turbo had first-and-last
keyframes; Gen-3 was retired in July 2026 and Gen-4 Turbo has no last-frame
input. Whether Gen-4.5 has shipped keyframes is unconfirmed — promised at
announcement, absent from the current docs. Nothing here depends on it.

**Nothing has to match the website.** The film happens in a white void and ends
on a white blowout, and the site fades up out of that white in CSS. There is no
frame to hit, no palette to match and no landing shot to grade. That is the
whole reason the white void is worth keeping even though a background would be
prettier.

## Which model, and what it costs

Credits are the real constraint, so spend them in the right order.

| Model | Credits/sec | 10s clip | Use it for |
|---|---|---|---|
| **Gen-4 Turbo** | 5 | 50 | Blocking out framing and motion. Draft everything here. |
| **Gen-4.5** | 12 | 120 | The final take, once a shot is locked. Current flagship. |

Standard (~625 credits/month) buys roughly **five** 10-second Gen-4.5 takes — not
a production budget once rerolls are counted. Pro (~2,250) is about eighteen.
Drafting on Turbo and committing on Gen-4.5 stretches the same money about 2.4×.

One prompting note that depends on the model: the "one action per prompt" rule is
a **Gen-4** rule. Gen-4.5 is documented as handling sequenced instructions and
camera choreography within a single prompt, so on 4.5 you can push more
direction into each shot than the prompts above carry. The five-shot split still
stands — 25 seconds is not one generation on any model.

**Never use negative prompts.** Runway documents that Gen-4 interprets what
should happen, not what to avoid, and that negative phrasing can produce the
opposite. "No camera shake" can give you shake; write "locked camera" instead.
Plenty of blog advice says otherwise — it contradicts Runway's own guide.

## Before you spend anything

Six things are worth five minutes in the app, because every Runway domain is
blocked from this environment and none of them could be confirmed from here:

1. Does Gen-4.5 accept an end-frame keyframe yet?
2. Is Extend available on Gen-4.5, and what is the cap?
3. Gen-4.5 native resolution — 720p or 1080p — and which aspect ratios.
4. Does Gen-4.5 take References directly, or is References still image-stage only?
5. Is Act-Two included on your plan tier?
6. **Runway's current policy on depicting a real, identifiable person.** You have
   his consent, but moderation can still block a generation, and a pipeline that
   fails after the look-dev spend is the most expensive way to find out.

## Putting it on the site

Four clips trim to roughly 12–18 seconds. **Do not make that a hero loop and do
not force it on every visit** — an unskippable intro is the fastest way to lose
the people you just paid to attract.

Ship it three ways:

1. **On the site:** a silent 3–4 second slice of the vortex as a looping hero.
   Under 2MB, WebM, poster frame for the first paint. Drops straight into
   `NEXT_PUBLIC_HERO_VIDEO` — `src/components/hero-room.tsx` already swaps the
   screen's typography for a video when that is set.
2. **Once per visitor:** the full cut as a skippable intro, gated on
   `localStorage`, ending on the whiteout the page fades up from, with a Skip
   control visible from the first second, never shown to anyone whose OS asks
   for reduced motion.
3. **Everywhere else:** the full cut is the YouTube channel trailer and the
   Discord invite video, where the length is an asset rather than a toll.
