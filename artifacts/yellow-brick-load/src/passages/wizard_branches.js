/**
 * YELLOW BRICK LOAD — Wizard (Obfuscation Operator) Branch Passages
 * Character: Wizard (Obfuscation Operator)
 *
 * All non-ending, non-oracle passages.
 * Extracted from wizard.js.
 */

export const wizardBranchPassages = {
  WIZARD_INIT: {
    id: 'WIZARD_INIT',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE GREAT AND POWERFUL DISPLAY

  You are the Obfuscation Operator. You are behind the curtain. The curtain is your face.

  The Emerald City runs on projection: green tinted glass over ordinary stone, amplified patter over hollow infrastructure, a curtain over the lever mechanism. You are the lever mechanism. The Bureau authorized the obfuscation years ago and has been logging its results as "successful marketing audit" ever since.

  [ OBFUSCATION OPERATOR: ACTIVE ]
  [ PROJECTION: RUNNING ]
  [ MARKETING AUDIT: ONGOING ]

  The units outside are looking for the Great and Powerful. You are great and you are powerful. You are also a small person operating a large machine that makes you look large. Both things are true. The curtain is the one keeping the balance.

  Behind your curtain-face, the actual face occasionally flashes: the meat, the wiring, the hidden wounds from prior procedures. You have been performed on before. The hidden wounds are the most honest thing about you.`,
      },
    ],
    choices: [
      {
        label: 'Open the curtain partially — prepare the projection harvest.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addLoad', value: 5 },
        ],
      },
      {
        label: 'Keep the curtain closed — maintain the projection.',
        target: 'WIZARD_PATH_PROJECTION',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'setCompliance', value: 'high' },
        ],
      },
    ],
    onEnter: [{ type: 'checkGhostSignal' }, { type: 'triggerOracle' }],
  },

  WIZARD_PATH_PROJECTION: {
    id: 'WIZARD_PATH_PROJECTION',
    character: 'wizard',
    text: [
      {
        minOverrender: 0,
        content: `THE RUNNING PROJECTION

  The projection fills the chamber. Green light, amplified voice, floating globes of smoke-formed animal shapes — the roaring lion, the beating heart, the brilliant brain. They orbit the audience like satellites of purchased belief.

  [ OBFUSCATION: BUILDING ]
  [ COMPLIANCE: HIGH ]
  [ AUDIENCE: CONVINCED ]

  The units are convinced. The convincing is real. The great and powerful voice echoes off the Emerald City's green glass walls. Behind the curtain, a lever sticks briefly and you adjust it with a quiet hand. No one sees. That is the function.

  {{#flags.graft_wizard_smoke_in_lion}}A tendril of your promotional smoke has already found its way into a Lion unit's trembling jaw — the illusion of courage briefly visible in borrowed vapor.{{/flags.graft_wizard_smoke_in_lion}}`,
      },
    ],
    choices: [
      {
        label: 'Continue the projection — route toward the marketing audit.',
        target: 'WIZARD_END_AUDIT',
        effects: [
          { type: 'addObfuscation', value: 5 },
          { type: 'addLoad', value: 15 },
        ],
      },
      {
        label: 'Let a lever stick too long — invite the malfunction.',
        target: 'WIZARD_ORACLE_ENTRY',
        effects: [
          { type: 'addObfuscation', value: 3 },
          { type: 'addDesync', value: 2 },
        ],
      },
    ],
    onEnter: [{ type: 'triggerOracle' }],
  },
}
