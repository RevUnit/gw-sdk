// Import ThoughtSpot SDK
// -- This is an outdated version of the SDK do to the older version of ThoughSpot that Hyatt is using
import { AuthType, init, PinboardEmbed } from "@thoughtspot/visual-embed-sdk";
console.log("JS Loaded");

// Initialize the ThoughSpot Library
init({
  thoughtSpotHost: "https://selfserviceanalytics.dev.private.hyatt.com",
  authType: AuthType.SSO,
});

// Instantiate class for embedding the full application
const myEmbed = new PinboardEmbed(document.getElementById("embed"), {
  frameParams: {
    width: "100%",
    height: "100%",
  },
  pinboardId: "7790a9a0-ee55-496a-a871-c4058821ffbf", // Global ID of the Pinboard or ThoughtSpot Page
  vizId: "b3abd429-f32b-4e75-bfb3-42b15feea830", // Global ID of the Visualization the ThoughtSpot Page
});

myEmbed.render();
