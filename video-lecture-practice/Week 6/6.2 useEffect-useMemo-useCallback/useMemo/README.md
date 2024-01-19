# useMemo

<p>Before we start, lets understand what memorization means It's a mildly DSA concept
It means remembering some output given an input and not computing it again.</p>

If I ask you to create an app that does two things.

1. Increases a counter by 1
2. Lets user put a value in an input box (n) and you need to show sum from 1-n.

   One restriction - everything needs to be inside App

## useMemo

useMemo will only recompute the memoized value when one of the deps has changed.
