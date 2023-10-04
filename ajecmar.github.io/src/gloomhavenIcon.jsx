import React, { Component } from 'react';

import elementAir from './assets/images/icons/elements/fh-air-color-icon.png';
import elementAll from './assets/images/icons/elements/fh-wild-color-icon.png';
import elementDark from './assets/images/icons/elements/fh-dark-color-icon.png';
import elementEarth from './assets/images/icons/elements/fh-earth-color-icon.png';
import elementFire from './assets/images/icons/elements/fh-fire-color-icon.png';
import elementIce from './assets/images/icons/elements/fh-ice-color-icon.png';
import elementLight from './assets/images/icons/elements/fh-light-color-icon.png';

import statusEffectAddTarget from './assets/images/icons/general/fh-target-bw-icon.png';
import statusEffectBless from './assets/images/icons/conditions/fh-bless-color-icon.png';
import statusEffectCurse from './assets/images/icons/conditions/fh-curse-color-icon.png';
import statusEffectDisarm from './assets/images/icons/conditions/fh-disarm-color-icon.png';
import statusEffectImmobilize from './assets/images/icons/conditions/fh-immobilize-color-icon.png';
import statusEffectInvisible from './assets/images/icons/conditions/fh-invisible-color-icon.png';
import statusEffectMuddle from './assets/images/icons/conditions/fh-muddle-color-icon.png';
import statusEffectPierce from './assets/images/icons/conditions/fh-pierce-color-icon.png';
import statusEffectPoison from './assets/images/icons/conditions/fh-poison-color-icon.png';
import statusEffectPush from './assets/images/icons/conditions/fh-push-color-icon.png';
import statusEffectPull from './assets/images/icons/conditions/fh-pull-color-icon.png';
import statusEffectStrengthen from './assets/images/icons/conditions/fh-strengthen-color-icon.png';
import statusEffectStun from './assets/images/icons/conditions/fh-stun-color-icon.png';
import statusEffectWard from './assets/images/icons/conditions/fh-ward-color-icon.png';
import statusEffectWound from './assets/images/icons/conditions/fh-wound-color-icon.png';
import statusEffectRegenerate from './assets/images/icons/conditions/fh-regenerate-color-icon.png';

import generalAttack from './assets/images/icons/general/fh-attack-bw-icon.png';
import generalAttackHex from './assets/images/icons/general/fh-hex-attack-color-icon.png';
import generalHeal from './assets/images/icons/general/fh-heal-bw-icon.png';
import generalJump from './assets/images/icons/general/fh-jump-bw-icon.png';
import generalLoot from './assets/images/icons/general/fh-loot-bw-icon.png';
import generalMove from './assets/images/icons/general/fh-move-bw-icon.png';
import generalRange from './assets/images/icons/general/fh-range-bw-icon.png';
import generalRetaliate from './assets/images/icons/general/fh-retaliate-bw-icon.png';
import generalShield from './assets/images/icons/general/fh-shield-bw-icon.png';
import generalTarget from './assets/images/icons/general/fh-target-bw-icon.png';
import generalPlusOne from './assets/images/icons/general/fh-plus-1-bw-icon.png';
import generalTeleport from './assets/images/icons/general/fh-teleport-bw-icon.png';
import generalLost from './assets/images/icons/general/fh-lost-black-card-color-icon.png';
import generalPersistent from './assets/images/icons/general/fh-persistent-bonus-color-icon.png';

const icons = {
  elementAir: elementAir,
  elementAll: elementAll,
  elementDark: elementDark,
  elementEarth: elementEarth,
  elementFire: elementFire,
  elementIce: elementIce,
  elementLight: elementLight,

  statusEffectAddTarget: statusEffectAddTarget,
  statusEffectBless: statusEffectBless,
  statusEffectCurse: statusEffectCurse,
  statusEffectDisarm: statusEffectDisarm,
  statusEffectImmobilize: statusEffectImmobilize,
  statusEffectInvisible: statusEffectInvisible,
  statusEffectMuddle: statusEffectMuddle,
  statusEffectPierce: statusEffectPierce,
  statusEffectPoison: statusEffectPoison,
  statusEffectPush: statusEffectPush,
  statusEffectPull: statusEffectPull,
  statusEffectStrengthen: statusEffectStrengthen,
  statusEffectStun: statusEffectStun,
  statusEffectWound: statusEffectWound,
  statusEffectWard: statusEffectWard,
  statusEffectRegenerate: statusEffectRegenerate,

  generalAttack: generalAttack,
  generalAttackHex: generalAttackHex,
  generalHeal: generalHeal,
  generalJump: generalJump,
  generalLoot: generalLoot,
  generalMove: generalMove,
  generalRange: generalRange,
  generalRetaliate: generalRetaliate,
  generalShield: generalShield,
  generalTarget: generalTarget,
  generalPlusOne: generalPlusOne,
  generalTeleport: generalTeleport,
  generalLost: generalLost,
  generalPersistent: generalPersistent,
};

class GloomhavenIconComponent extends Component {

  findIcon() {
    return icons[this.props.icon];
  }

  render() {
    return (
      <img src={this.findIcon()} alt={this.props.icon} className="gloomhaven-icon-img" style={{ 'max-width': this.props.width, 'max-height': this.props.width }} />
    );
  }
}

export default GloomhavenIconComponent;