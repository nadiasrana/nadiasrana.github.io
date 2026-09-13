---
title: Diamond price drivers
permalink: /projects/diamond-price-drivers/
date: 2026-05-01
period: Spring 2026
featured: true
kicker: Case study · Spring 2026
description: >-
  918 natural pear-shaped diamonds from four retailers, filtered to one narrow
  band, to test which published grade actually moves the price and whether the
  four retailers agree. Two of them priced the same band at $1,550 and $3,249
  per carat.
deck: >-
  Which grade moves the price more depends on the basis you ask it on — on
  918 individual stones, clarity and color are a dead heat. Together the two
  still leave more than a third of the price unexplained.
# RecordMetadata, Schema B. Fixed rows: Period, Tools, Data, Status.
record:
  - { label: Period, value: Spring 2026 }
  - { label: Tools,  value: "Excel · Regression · Data validation · Web scraping" }
  - { label: Data,   value: "918 stones, four retailers, collected 29 March 2026" }
  - { label: Status, value: Complete }
---

## The question

Two questions, not one. Which published grade moves the price of a pear-shaped
diamond more, clarity or color? And do four retailers price the same
specification the same way?

## The data

<table class="findings">
  <caption>Stones collected, by retailer</caption>
  <thead>
    <tr><th scope="col">Retailer</th><th scope="col" class="findings__num">Stones</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Blue Nile</th><td class="findings__num">159</td></tr>
    <tr><th scope="row">Brilliant Earth</th><td class="findings__num">376</td></tr>
    <tr><th scope="row">James Allen</th><td class="findings__num">147</td></tr>
    <tr><th scope="row">With Clarity</th><td class="findings__num">236</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row" class="findings__total">Total</th><td class="findings__num findings__total">918</td></tr>
  </tfoot>
</table>

Every stone sits in a deliberately narrow band: 0.90 to 0.99 carat, color D to
K, clarity IF to SI2. Carat is held close to constant on purpose, and held just
below the 1.00 carat threshold where prices jump, so that the comparison is
between grades rather than between sizes.

Per-carat prices across the set are right-skewed. The mean is $2,571 against a
median of $2,227, with a skewness of 1.06: a small number of expensive stones
pulls the mean above the typical stone.

The filter was applied at collection rather than afterwards. Color D to K and
clarity IF to SI2 were set on each retailer's own listing filters, and the
surviving listings were scraped on 29 March 2026. How many listings that
excluded is not recoverable from the source data, so no figure for it appears
here.

## Method

A single-variable linear regression of price per carat on clarity, a second on
color, then a combined model using both. Confidence intervals on the estimates
rather than point values alone.

Separately, pivot tables comparing the four retailers across the band, and a
benchmark of retail pricing against the Rapaport price guide.

Built in Excel. Reported in Word.

## What I found

<table class="findings findings--wide">
  <caption>Per-carat price against grade</caption>
  <thead>
    <tr>
      <th scope="col">Model</th>
      <th scope="col" class="findings__num">n</th>
      <th scope="col" class="findings__num">R<sup>2</sup></th>
      <th scope="col" class="findings__num">Per grade step</th>
    </tr>
  </thead>
  <tbody>
    <tr class="findings__group"><th colspan="4" scope="colgroup">Fitted on grade averages, the other grade held fixed</th></tr>
    <tr><th scope="row">Clarity, color held at D</th><td class="findings__num">7</td><td class="findings__num">0.909</td><td class="findings__num">&minus;$528.70</td></tr>
    <tr><th scope="row">Color, clarity held at VVS1</th><td class="findings__num">8</td><td class="findings__num">0.839</td><td class="findings__num">&minus;$631.44</td></tr>
  </tbody>
  <tbody>
    <tr class="findings__group"><th colspan="4" scope="colgroup">Fitted on individual stones, one grade at a time</th></tr>
    <tr><th scope="row">Clarity alone</th><td class="findings__num">918</td><td class="findings__num">0.335</td><td class="findings__num">&minus;$421.20</td></tr>
    <tr><th scope="row">Color alone</th><td class="findings__num">918</td><td class="findings__num">0.332</td><td class="findings__num">&minus;$312.70</td></tr>
  </tbody>
  <tbody>
    <tr class="findings__group"><th colspan="4" scope="colgroup">Fitted on individual stones, both grades</th></tr>
    <tr><th scope="row">Clarity and color combined</th><td class="findings__num">918</td><td class="findings__num">0.633</td><td class="findings__num findings__none">no single slope</td></tr>
  </tbody>
</table>

On grade averages, clarity gives the tighter fit: 0.909 against 0.839. Ask the
same question of the 918 individual stones and the gap closes to nothing —
0.335 against 0.332. The two middle rows are the controlled comparison: same
question, same data, one grade at a time, and the only thing that changed is
whether the stones were averaged first.

The slopes reverse as well. On averages, color has the steeper step: $631.44
per carat for each grade down the color scale, against $528.70 for clarity. On
individual stones it is the other way round, $421.20 for clarity against
$312.70 for color.

So "which grade matters more" has no answer that survives both bases. What does
survive is the last row. Together the two grades explain 63.3% of the price of
an individual stone, which leaves more than a third of it unaccounted for by
the two numbers a listing puts in front of a buyer.

The four retailers do not agree. James Allen averaged $1,550 per carat across
the band; With Clarity averaged $3,249. That is a spread of roughly $1,700 per
carat between two sellers of stones filtered to the same color, clarity and
carat range, on a set whose median is $2,227.

Benchmarked separately against the Rapaport price guide, retail traded between
5% and 35% below the guide.

## Limitations

The first group in the table fits grade averages with the other grade held
fixed: seven points for clarity with color held at D, eight for color with
clarity held at VVS1. The second group fits the same one-grade-at-a-time
question to all 918 individual stones. Nothing changes between them but the
aggregation, which is why both are there.

Averaging inside each grade removes the variation between stones that share
it. What is left is a smooth line, and a smooth line fits well. Clarity goes
from 0.909 to 0.335. Color goes from 0.839 to 0.332. The gap between the two
grades — 0.070 on averages, wide enough that it reads as a finding — is 0.003
on stones, which is not a finding at all.

That is the whole of the caution. An R<sup>2</sup> of 0.909 against seven
points is not a better result than 0.633 against 918 stones; it is a different
measurement. And on the measurement that describes an actual diamond, clarity
and color are indistinguishable.

<blockquote class="pullquote">
  <p>The two numbers answer two questions: how cleanly grade averages decline,
  and how much of one diamond's price those grades explain. Only the second one
  tells a buyer anything.</p>
</blockquote>

The cut premium is confounded. Excellent-cut stones averaged $3,358 per carat
against $2,332 for Very Good, a 44% premium. But the higher-cut stones also
carry better color and better clarity, so that 44% cannot be attributed to cut.
The figure is reported as a difference between groups, not as the price of cut.

The confidence interval is not the one I set out to build. The plan was a
30-sample interval on D-color, VVS1 stones. The data did not contain enough of
them to support it. Rather than build an interval on a sample too thin to carry
one, I relaxed the constraint to H-color, SI2, where 44 diamonds were available,
and reported on that basis instead: a 95% confidence interval of $1,684 to
$1,837 per carat, with a point estimate of $1,760.15.

<div class="callout callout--observation">
  <p class="callout__label">The point</p>
  <p>The relaxation is stated in the report rather than left in the workbook. An
  interval forced onto the original constraint would have matched the plan and
  carried no confidence worth reporting.</p>
</div>

## What I would do differently

Four things, in order of how much they would change the result.

**Plan the sample per cell before collecting rather than after.** The 95%
confidence interval was meant to run on D-color, VVS1 stones and there were
not enough of them, so it fell back to H-SI2 where 44 were available. Deciding
the target cell first and collecting until it was full would have avoided
relaxing the constraint once the data was already in.

**Balance the cut distribution deliberately.** Excellent-cut stones in this
sample also carried better color and clarity, so the 44% cut premium cannot be
separated from the grades that travel with it. A stratified sample across cut
would let cut be tested on its own.

**Collect across more than one day.** Everything here came from a single pull
on 29 March 2026. A single snapshot cannot distinguish a real price difference
from a promotion running that week at one retailer.

**Record that these are listing prices, not transaction prices.** What a stone
is advertised at and what it sells for are different numbers, and only one of
them is in this dataset.
