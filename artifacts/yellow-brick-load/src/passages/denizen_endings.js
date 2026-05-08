/**
 * YELLOW BRICK LOAD — The Denizen (Unit DN-09) Ending Passages
 * Character: denizen
 */

export const denizenEndingPassages = {
  DENIZEN_END_COMPACTED: {
    id: 'DENIZEN_END_COMPACTED',
    character: 'denizen',
    endingId: 'DEN-END-01',
    endingName: 'The Compacted Grain',
    institution: 'Agricultural',
    systemStatus: 'Harvested',
    surreality: 1,
    isEnding: true,
    text: [
      {
        minOverrender: 0,
        content: `THE COMPACTED GRAIN

When your movement capacity hits zero, the Bureau does not bury assets. It processes them. Your anonymity reaches its final form: floor material.

Ribs become rafters. Weight becomes architecture. The Harvest continues over you without interruption.`,
      },
    ],
    onEnter: [],
  },

  DENIZEN_END_STRESS_TEST: {
    id: 'DENIZEN_END_STRESS_TEST',
    character: 'denizen',
    endingId: 'DEN-END-02',
    endingName: 'The Stress-Tested Link',
    institution: 'Military',
    systemStatus: 'Fractured',
    surreality: 2,
    isEnding: true,
    text: [
      {
        minOverrender: 0,
        content: `THE STRESS-TESTED LINK

You are strapped into the rig so the Bureau can measure exactly how much narrative tension a background unit can absorb.

For one bright second, you are the most important thing in Oz. Then the reading completes and you are repurposed as furnace kindling.`,
      },
    ],
    onEnter: [],
  },
}
