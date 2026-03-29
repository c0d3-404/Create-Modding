ServerEvents.recipes(event => {
  //
  // ----------------------------
  // Recipe removals / gating
  // ----------------------------
  //
  event.remove({ output: 'create:precision_mechanism' })
  event.remove({ output: 'create:mechanical_crafter' })
  event.remove({ output: 'create:mechanical_mixer' })
  event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
  event.remove({ output: 'ars_nouveau:source_jar' })
  event.remove({ output: 'sophisticatedstorage:controller' })
  event.remove({ output: 'create:andesite_alloy' })
  event.remove({ output: 'create:brass_casing' })
  event.remove({ output: 'sophisticatedbackpacks:backpack' })
  event.remove({ output: 'sophisticatedstorage:barrel' })

  //
  // ----------------------------
  // Early interlock
  // ----------------------------
  //
  event.shaped('4x create:andesite_alloy', [
    ' I ',
    'ASA',
    ' A '
  ], {
    I: 'minecraft:iron_nugget',
    A: 'minecraft:andesite',
    S: 'ars_nouveau:source_gem'
  })

  event.shaped('2x create:brass_casing', [
    ' B ',
    'SGS',
    ' B '
  ], {
    B: 'create:brass_sheet',
    G: 'minecraft:granite',
    S: 'ars_nouveau:source_gem'
  })

  event.shaped('sophisticatedbackpacks:backpack', [
    'LSL',
    'CBC',
    'L L'
  ], {
    L: 'minecraft:leather',
    S: 'ars_nouveau:source_gem',
    C: 'create:cogwheel',
    B: 'minecraft:chest'
  })

  event.shaped('sophisticatedstorage:barrel', [
    'PSP',
    'CBC',
    'PSP'
  ], {
    P: 'minecraft:planks',
    S: 'ars_nouveau:source_gem',
    C: 'create:shaft',
    B: 'minecraft:barrel'
  })

  // Adjust if your exact Ars item ids differ
  event.remove({ output: 'ars_nouveau:novice_spell_book' })
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'create:cogwheel',
      'create:cogwheel',
      'create:shaft',
      'create:shaft',
      'create:andesite_alloy',
      'ars_nouveau:source_gem'
    ],
    'minecraft:book',
    'ars_nouveau:novice_spell_book',
    500
  )

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'create:brass_sheet',
      'create:brass_sheet',
      'create:shaft',
      'minecraft:glass',
      'minecraft:glass',
      'ars_nouveau:source_gem'
    ],
    'minecraft:glass_bottle',
    'ars_nouveau:source_jar',
    750
  )

  //
  // ----------------------------
  // Hybrid materials
  // ----------------------------
  //
  event.recipes.createMixing(
    '2x kubejs:arcane_alloy_ingot',
    [
      '2x minecraft:iron_ingot',
      'ars_nouveau:source_gem',
      'minecraft:blaze_powder',
      'minecraft:redstone'
    ]
  ).superheated()

  event.recipes.createSequencedAssembly(
    ['create:precision_mechanism'],
    'create:large_cogwheel',
    [
      event.recipes.createDeploying(
        'kubejs:incomplete_infused_precision_mechanism',
        ['kubejs:incomplete_infused_precision_mechanism', 'create:golden_sheet']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_infused_precision_mechanism',
        ['kubejs:incomplete_infused_precision_mechanism', 'ars_nouveau:source_gem']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_infused_precision_mechanism',
        ['kubejs:incomplete_infused_precision_mechanism', 'kubejs:resonant_storage_core']
      ),
      event.recipes.createPressing(
        'kubejs:incomplete_infused_precision_mechanism',
        'kubejs:incomplete_infused_precision_mechanism'
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_infused_precision_mechanism')
  .loops(1)

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'kubejs:arcane_alloy_ingot',
      'kubejs:arcane_alloy_ingot',
      'kubejs:arcane_alloy_ingot',
      'kubejs:arcane_alloy_ingot',
      'minecraft:blaze_rod',
      'minecraft:blaze_rod',
      'minecraft:gold_block',
      'minecraft:gold_block'
    ],
    'ars_nouveau:source_gem_block',
    'kubejs:compressed_source_mass',
    2000
  )

  event.recipes.createMixing(
    'kubejs:energized_mechanism',
    [
      'create:precision_mechanism',
      'minecraft:redstone_block',
      'minecraft:copper_ingot',
      'kubejs:arcane_alloy_ingot'
    ]
  ).heated()

  event.recipes.createMixing(
    'kubejs:arcane_flux_core',
    [
      'kubejs:arcane_alloy_ingot',
      'ars_nouveau:source_gem',
      'minecraft:redstone_block',
      'minecraft:glowstone_dust',
      'minecraft:ender_pearl',
      'kubejs:resonant_storage_core',
      'kubejs:energized_mechanism'
    ]
  ).heated()

  event.recipes.createMechanicalCrafting(
    'kubejs:singularity_fragment',
    [
      'AMA',
      'MCM',
      'AMA'
    ],
    {
      A: 'kubejs:arcane_alloy_ingot',
      M: 'create:precision_mechanism',
      C: 'ars_nouveau:source_gem_block'
    }
  )

  //
  // ----------------------------
  // Bridge items
  // ----------------------------
  //
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'create:precision_mechanism',
      'create:precision_mechanism',
      'create:brass_casing',
      'create:brass_casing',
      'ars_nouveau:source_gem_block',
      'ars_nouveau:source_gem_block',
      'kubejs:arcane_alloy_ingot',
      'kubejs:arcane_alloy_ingot'
    ],
    'create:cogwheel',
    'kubejs:mechanomantic_core',
    2500
  )

  event.recipes.createMechanicalCrafting(
    'kubejs:resonant_storage_core',
    [
      'ASA',
      'SCS',
      'ASA'
    ],
    {
      A: 'ars_nouveau:source_gem',
      S: 'create:brass_sheet',
      C: 'sophisticatedstorage:barrel'
    }
  )

  event.shaped('create:mechanical_mixer', [
    ' B ',
    'GCG',
    ' M '
  ], {
    B: 'create:brass_casing',
    G: 'minecraft:gold_ingot',
    C: 'kubejs:mechanomantic_core',
    M: 'create:whisk'
  })

  event.shaped('create:mechanical_crafter', [
    ' B ',
    'RCR',
    ' P '
  ], {
    B: 'create:brass_casing',
    R: 'minecraft:redstone',
    C: 'kubejs:mechanomantic_core',
    P: 'create:precision_mechanism'
  })

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'create:precision_mechanism',
      'create:brass_casing',
      'create:shaft',
      'create:cogwheel',
      'kubejs:resonant_storage_core',
      'ars_nouveau:source_gem',
      'ars_nouveau:source_gem'
    ],
    'minecraft:smithing_table',
    'ars_nouveau:enchanting_apparatus',
    1500
  )

  event.shaped('sophisticatedstorage:controller', [
    ' B ',
    'ACA',
    ' R '
  ], {
    B: 'create:brass_casing',
    A: 'ars_nouveau:source_gem_block',
    C: 'kubejs:resonant_storage_core',
    R: 'minecraft:redstone_block'
  })

  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'kubejs:mechanomantic_core',
      'kubejs:mechanomantic_core',
      'kubejs:resonant_storage_core',
      'kubejs:resonant_storage_core',
      'create:precision_mechanism',
      'create:precision_mechanism',
      'kubejs:compressed_source_mass',
      'kubejs:arcane_flux_core'
    ],
    'create:brass_casing',
    'kubejs:charged_archengine_frame',
    4000
  )

  event.recipes.createSequencedAssembly(
    ['kubejs:hybrid_catalyst_piece'],
    'create:precision_mechanism',
    [
      event.recipes.createDeploying(
        'kubejs:incomplete_hybrid_catalyst_piece',
        ['kubejs:incomplete_hybrid_catalyst_piece', 'kubejs:compressed_source_mass']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_hybrid_catalyst_piece',
        ['kubejs:incomplete_hybrid_catalyst_piece', 'kubejs:arcane_flux_core']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_hybrid_catalyst_piece',
        ['kubejs:incomplete_hybrid_catalyst_piece', 'kubejs:charged_archengine_frame']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_hybrid_catalyst_piece',
        ['kubejs:incomplete_hybrid_catalyst_piece', 'minecraft:netherite_scrap']
      ),
      event.recipes.createDeploying(
        'kubejs:incomplete_hybrid_catalyst_piece',
        ['kubejs:incomplete_hybrid_catalyst_piece', 'kubejs:energized_mechanism']
      ),
      event.recipes.createPressing(
        'kubejs:incomplete_hybrid_catalyst_piece',
        'kubejs:incomplete_hybrid_catalyst_piece'
      )
    ]
  )
  .transitionalItem('kubejs:incomplete_hybrid_catalyst_piece')
  .loops(1)

  event.recipes.createMechanicalCrafting(
    'kubejs:singularity_scaffold',
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'kubejs:charged_archengine_frame',
      B: 'kubejs:hybrid_catalyst_piece',
      C: 'sophisticatedstorage:controller'
    }
  )

  //
  // ----------------------------
  // Catalyst and singularity
  // ----------------------------
  //
  event.recipes.createMechanicalCrafting(
    'kubejs:uncharged_singularity_catalyst',
    [
      'CMAMCMAMC',
      'MSSSMSSSM',
      'ASEESEESA',
      'MSEXEXESM',
      'CMSECESMC',
      'MSEXEXESM',
      'ASEESEESA',
      'MSSSMSSSM',
      'CMAMCMAMC'
    ],
    {
      C: 'create:brass_casing',
      M: 'create:precision_mechanism',
      A: 'kubejs:compressed_source_mass',
      S: 'kubejs:singularity_fragment',
      E: 'kubejs:arcane_flux_core',
      X: 'kubejs:hybrid_catalyst_piece'
    }
  )

  // Source is required in the charging step, not in the 9x9 itself
  event.recipes.ars_nouveau.enchanting_apparatus(
    [
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'kubejs:compressed_source_mass',
      'kubejs:arcane_alloy_ingot',
      'kubejs:arcane_alloy_ingot',
      'ars_nouveau:source_gem_block',
      'kubejs:singularity_scaffold'
    ],
    'kubejs:uncharged_singularity_catalyst',
    'kubejs:charged_singularity_catalyst',
    5000
  )

  event.recipes.createMixing(
    'kubejs:singular_essence',
    [
      'kubejs:charged_singularity_catalyst',
      'minecraft:nether_star',
      '2x kubejs:arcane_alloy_ingot',
      'create:blaze_cake',
      'kubejs:energized_mechanism'
    ]
  ).superheated()

  event.recipes.createMechanicalCrafting(
    'kubejs:arcane_singularity',
    [
      'CMSSSMC',
      'MXXEXXM',
      'SXOOOXS',
      'SEONOES',
      'SXOOOXS',
      'MXXEXXM',
      'CMSSSMC'
    ],
    {
      C: 'kubejs:charged_singularity_catalyst',
      M: 'create:precision_mechanism',
      S: 'kubejs:singularity_fragment',
      E: 'kubejs:arcane_flux_core',
      X: 'kubejs:hybrid_catalyst_piece',
      O: 'kubejs:singular_essence',
      N: 'minecraft:nether_star'
    }
  )

  //
  // ----------------------------
  // Additional cross-mod integrations
  // ----------------------------
  //
  event.recipes.createMixing(
    '2x ars_nouveau:source_gem',
    [
      'minecraft:amethyst_shard',
      'minecraft:amethyst_shard',
      'ars_nouveau:sourceberry',
      'minecraft:glowstone_dust'
    ]
  ).heated()

  event.recipes.createCompacting(
    'ars_nouveau:source_gem_block',
    [
      '9x ars_nouveau:source_gem'
    ]
  )

  event.recipes.createMechanicalCrafting(
    'ars_nouveau:magebloom_block',
    [
      'MMM',
      'MMM',
      'MMM'
    ],
    {
      M: 'ars_nouveau:magebloom_fiber'
    }
  )
})
