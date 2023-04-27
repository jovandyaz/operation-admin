import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
	const theme = useTheme();

	const PRIMARY_LIGHT = theme.palette.primary.light;

	const PRIMARY_MAIN = theme.palette.primary.main;

	const PRIMARY_DARK = theme.palette.primary.dark;

	const logo = (
		<Box
			ref={ref}
			component="div"
			sx={{
				width: 40,
				height: 40,
				display: 'inline-flex',
				...sx,
			}}
			{...other}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 512 512"
			>
				<defs>
					<linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
						<stop offset="0%" stopColor={PRIMARY_DARK} />
						<stop offset="100%" stopColor={PRIMARY_MAIN} />
					</linearGradient>

					<linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
						<stop offset="0%" stopColor={PRIMARY_LIGHT} />
						<stop offset="100%" stopColor={PRIMARY_MAIN} />
					</linearGradient>

					<linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
						<stop offset="0%" stopColor={PRIMARY_LIGHT} />
						<stop offset="100%" stopColor={PRIMARY_MAIN} />
					</linearGradient>
				</defs>

				<g
					transform="translate(0.000000,468.000000) scale(0.100000,-0.100000)"
					fill="#dd1f26"
					fillRule="evenodd"
					stroke="none"
					strokeWidth="1"
				>
					<path
						d="M2635 4586 c-77 -18 -130 -40 -173 -72 -107 -82 -92 -179 42 -278 90
-67 116 -99 116 -143 0 -46 -21 -84 -70 -126 -100 -86 -267 -70 -372 35 -50
50 -50 88 -3 202 52 127 46 161 -40 212 -140 81 -352 71 -552 -26 -75 -37
-112 -62 -142 -96 -54 -62 -60 -98 -27 -169 39 -86 77 -98 390 -124 138 -12
192 -33 240 -94 26 -32 31 -48 31 -91 0 -71 -22 -101 -102 -139 -57 -26 -81
-31 -170 -35 -65 -3 -119 0 -147 8 -50 14 -106 66 -159 150 -44 70 -59 83
-132 116 -85 39 -244 46 -366 15 -91 -23 -222 -81 -296 -133 -113 -77 -209
-203 -227 -297 -15 -80 42 -170 137 -212 46 -22 66 -24 187 -24 160 0 195 9
385 97 407 188 641 189 726 3 53 -116 -16 -232 -209 -348 -134 -81 -234 -93
-462 -57 -270 43 -414 19 -674 -112 -120 -60 -192 -112 -281 -202 -137 -138
-198 -285 -197 -471 1 -234 89 -413 240 -487 62 -31 74 -33 167 -33 116 0 185
19 324 90 181 91 409 283 510 430 29 42 82 137 118 213 114 243 133 277 182
338 53 65 167 150 258 191 44 20 80 27 146 31 83 4 91 3 151 -27 73 -36 170
-132 205 -203 25 -53 28 -145 6 -208 -22 -61 -92 -155 -175 -234 -67 -63 -140
-119 -349 -271 -220 -158 -380 -418 -447 -726 -24 -112 -29 -334 -10 -451 53
-325 204 -556 441 -673 118 -58 202 -77 340 -77 128 1 223 22 340 76 253 117
459 368 549 668 45 152 51 196 51 383 -1 161 -3 191 -28 287 -49 197 -101 292
-258 472 -121 139 -174 209 -207 271 -24 45 -26 61 -26 150 0 80 5 112 23 157
36 92 97 175 159 216 52 35 60 37 131 36 58 0 91 -7 137 -26 128 -53 248 -156
299 -258 46 -91 56 -170 60 -465 4 -303 16 -387 75 -529 51 -122 122 -219 265
-361 190 -190 348 -289 534 -336 124 -31 276 -24 383 18 180 71 337 232 404
417 106 292 -6 661 -292 965 -201 213 -375 297 -697 336 -346 42 -431 64 -549
142 -85 56 -159 139 -204 227 -43 88 -46 144 -8 194 70 91 290 125 450 68 59
-20 198 -112 283 -187 154 -134 209 -174 308 -221 288 -138 597 -139 744 -1
66 62 92 120 92 208 1 272 -309 547 -700 621 -187 35 -360 2 -490 -94 -154
-113 -273 -157 -406 -150 -104 6 -177 40 -257 120 -119 118 -119 201 -1 294
76 60 122 69 290 58 241 -16 367 -12 444 15 94 32 157 76 184 130 25 50 23 74
-13 137 -58 103 -283 218 -476 244 -147 20 -291 -17 -381 -100 l-52 -48 -1
-119 c-1 -137 -12 -167 -75 -202 -153 -86 -312 -81 -442 15 -130 95 -82 199
146 314 114 58 161 98 178 147 25 76 -47 162 -168 203 -85 29 -266 37 -358 16z"
					/>
				</g>
			</svg>
		</Box>
	);

	if (disabledLink) {
		return <>{logo}</>;
	}

	return (
		<Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
			{logo}
		</Link>
	);
});

export default Logo;