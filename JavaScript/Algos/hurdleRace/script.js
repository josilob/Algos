function hurdleRace(maxJump, hurdles) {
	if (maxJump >= Math.max(...hurdles)) return 0;
	else return Math.max(...hurdles) - maxJump;
}
