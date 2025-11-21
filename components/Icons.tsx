import React from 'react';
import { Check, X, Zap, Shield, Star, Crown, Box, Layers, Hexagon } from 'lucide-react';

export const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Check className={className} />;
export const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => <X className={className} />;
export const ZapIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Zap className={className} />;
export const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Shield className={className} />;
export const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Star className={className} />;
export const CrownIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Crown className={className} />;
export const BoxIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Box className={className} />;
export const LayersIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Layers className={className} />;
export const HexagonIcon = ({ className = "w-5 h-5" }: { className?: string }) => <Hexagon className={className} />;