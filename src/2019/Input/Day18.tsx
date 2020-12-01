const INPUT: { [key:string]: string } = {
DEMO_1_0: `#########
#b.A.@.a#
#########`,
DEMO_1_1: `########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################`,
DEMO_1_2: `########################
#...............b.C.D.f#
#.######################
#.....@.a.B.c.d.A.e.F.g#
########################`,
DEMO_1_3: `#################
#i.G..c...e..H.p#
########.########
#j.A..b...f..D.o#
########@########
#k.E..a...g..B.n#
########.########
#l.F..d...h..C.m#
#################`,
DEMO_1_4: `########################
#@..............ac.GI.b#
###d#e#f################
###A#B#C################
###g#h#i################
########################`,
DEMO_2_1: `#######
#a.#Cd#
##@#@##
#######
##@#@##
#cB#Ab#
#######`,
DEMO_2_2: `###############
#d.ABC.#.....a#
######@#@######
###############
######@#@######
#b.....#.....c#
###############`,
DEMO_2_3: `#############
#DcBa.#.GhKl#
#.###@#@#I###
#e#d#####j#k#
###C#@#@###J#
#fEbA.#.FgHi#
#############`,
DEMO_2_4: `#############
#g#f.D#..h#l#
#F###e#E###.#
#dCba@#@BcIJ#
#############
#nK.L@#@G...#
#M###N#H###.#
#o#m..#i#jk.#
#############`,
REAL_1: `#################################################################################
#.....#...............#.....#.A.#.......#.....#e..............#.....#...........#
#.###.#########.#####.###.#.###.#.###.#.###.#.###.###########.#.#.###.#####.#####
#.#.#.....#...#.#...#.#...#.....#.#.#.#.#...#..m#...#.......#.#.#.#...#.#...#...#
#.#.#####.#.#.#.#.###.#.#########.#.#.###.#####.###.#.#######.###.#.###.#N###.#.#
#.#.#...#...#...#...#.#.....T.......#...#.#...#.....#.#.....#.#...#.....#.#...#.#
#.#.#.#.###########.#.#.###############.#.#.#.#######.#.###.#.#.#.#####.#.#.###.#
#.#...#.......#.....#.#.......#.....#...#.#.#...#.........#j....#.#...#.#.#.#...#
#.###########.#.#.#.#.#########.###.#.#.#.#.###.#.#########.#####.###.#.#.#.#.#.#
#.#.....#...#.#.#.#.#...........#...#.#.#.#...#.#.#...#...#.#...#...#.#.#...#.#.#
#.#P###.#D#.#.#.#.###############.###.#.#.###.#.#.###.#.#.###.#.###.#.#.#####.###
#...#...#.#.#u..#.......#...#.....#...#.#.#...#.......#.#.....#...#...#.....#...#
#####.###.#.#######.###.#.###.#######.#.#.#########.###.#########.#########.###.#
#...#.#...#g......#...#.#...#.#.....#.#.#.#...#...#.#...#.......#.#.........#...#
#.#.#.#.#########.###.#.###.#.###.#.#.#.#.#.#.#.#.###.#######.#.#.#.#########O#.#
#.#...#..d#.....#...#.#.....#.....#...#.#...#...#.....#.....#.#.#...#.....#...#.#
#.#######.#.###F###.#.#################.#.###############.#.#.#.#######.#.#.###.#
#.....#...#..h#...#.#.............#.....#.#.......#.......#...#.....#...#.#.#...#
#.###.#H#####.#.###G#.#######.#####.#####.###.#.#.#.###.###########.#.###.#.#####
#.#.#.#.......#.#...#.....#...#...#.#...#...#.#.#.#...#.#...#.....#...#.#.#.....#
#.#.#.#########.#.#########.###.#.#.###.###.#.#.#.#####.#.#.#####.#####.#.#####.#
#...#.....#.....#b..#...#...#...#...#...#...#.#.#.....#...#.#y..#.......#.....#.#
###.#####.#.#######.###B#.#.#.#######.#.#.#####.#####.#.###.###.#####.#.#.#####.#
#...#...I.#f......#.....#.#.#.#...#...#.#...#...#...#.#.#.....#.....#.#...#.....#
#####.###########.#######.###.#.###.#.#####.#.###.###.###.#########.#######.#####
#o....#k........#.#.#.......#.#.#...#...#.#.#.#.....#.#...#.......#.......K.#...#
#.#####.###.#####.#.#.#####.#.#.#.#####.#.#.#.###.#.#.#.###.###.###############.#
#.#.......#...#.C.#.....#...#.#...#...#.#...#...#.#.#.#...#...#.....#...........#
#.#.#########.#.#########.###.###.#.###.#.#####.#.#.#.###.###.#####.#.#.#######.#
#...#l........#...#.....#...#...#...#...#.......#.#...#...#...#...#...#.X.#...#.#
#.###.#.#########.#V###.###.###.#####.###########.#####.###.###.#########.#.#.#.#
#...#.#.#.....#...#.#.#.#...#.#.....#...#.......#...#...#...#...........#.#.#.#.#
#####.#.#.###.#.###.#.#.#.#.#.#####.###.#.#####.###.#.#.#.###.#######.###.#.#.#W#
#.....#.#.#r#.#.#...#.#.#.#.#.#...#...#.#.#...#...#.#.#.#...#.......#...#.#.#.#.#
#.#######.#.#.#.###.#.#.#.#.#.#.#.###.#.#.###.###.#.#.#.###.###########.#.#.#.#.#
#.........#.#.#.#s..#...#.#.Q.#.#.#...#.#...#...#...#.#.............#...#.#.#...#
#.#########.#.#.#.###.###.#.###.#.#.###.###.#.#.#####.#######.#####.#.###.#.#####
#...#...#...#.#...#...#...#.#...#...#...#.#.#.#.....#...#...#.#...#...#...#...#.#
###.#Y#.###.#.#####.###.#####.#########.#.#.###.###.#####.#.###.#.#####.#####.#.#
#.....#.....#.......#...........................#.........#....q#.......#.......#
#######################################.@.#######################################
#...#.#.................#..z..............#.......#.............#...............#
#.#.#.#.#.#############.#.#.###########.#.#.#.#####.#####.#####.#.###.#########.#
#.#...#.#.#...#.#.....#.#.#.#.....#...#.#...#.#...Z.....#.#.....#.#.#.#.......#.#
#.#####.#.#.#.#.#.#.#.#.###.#.#####.#.#.#.###.#.#########.#######.#.#.#####.###.#
#.#...#.#...#.#...#.#x#.#...#.#.....#.#.#...#.....#.....#.#...#.....#.#...#.....#
#.#.#.#.#####.#####.###.#.###.#.#####.#.###.#######.###.#.#.#.#.#####.#.#.#####.#
#w..#...#...#.....#.#.....#...#.#.....#.#.#...#.....#.#...#.#...#..v#.#.#.....#.#
#.#######.#.#####.#.#.#####.###.#.#####.#.###.#.#####.#.###.#####.#.#.#.#####.###
#.#.......#.#.#...#.#.#...#.#...#.#...#.#...#.#.#.......#...#...#.#.#.#.#...#...#
#.###.#.###.#.#.###.#.#.#.#.#.###.#.#.#.#.###.#.###.#####.###.#.#.#.#.#.###.###.#
#...#.#...#...#.#.#...#.#.#...#.#.#.#...#...#.#...#.#...#.#...#.R.#.#.........#.#
###.#####.###.#.#.#.###.#.###.#.#.#.#####.#.#.###.#.#.#.#.#.#######.#.#########.#
#.#...#...#.#.#.#.....#.#...#...#.......#.#.#...#.#...#.#.#.#...#...#.#.........#
#.###.#.###.#.#.#######.###.#.#########.#.#.###.#.#######.#.#.###.###.#.#######.#
#...#...#...#.#.........#...#.#...#.....#.#...#.#.........#.#.#...#...#.#.......#
#.#######.#.#.###########.#####.#.#####.###.###.###########.#.#.#######.#########
#.........#.#.#.........#.......#.#...#.#...#...#...........#.#.#.....#.........#
#.###.#######.#.###.#####.#####.#.#.#.###.#.#.###.###########.#.#.###S#########.#
#...#.......#...#...#...#.#...#.#...#...#.#.#...#.....L.#.....#...#...#...#...#.#
#.#########.#####.###.#.###.#.###.#####.#.#####.#######.#.#########.###.#.#.#.#.#
#.#.......#.#...#.#.#.#.#...#...#...#...#...........#...#...#.#....c#...#...#.#.#
###.#####.#.#.#.#.#.###.#.#####.#####.###.###########.#####.#.#.#####.#######.#.#
#...#.......#.#...#...#...#...#...#...#.#...#.........#.....#...#.......#.......#
#.###.#######.#####.#######.#.###.#.###.###.#.###########.#.#########.#.#######.#
#.#.#.#...#...#.............#...#...#...#...#.............#.........#.#.#.....#.#
#.#.#.#.#.#.###########.#####.#.#####.###.#########################.###.#.###.#.#
#.#...#.#.#.....#.....#...#...#.#.#.....#.....#...#.......#.......#...#...#...#.#
#.#####.#.#####.#.###.#####.###.#.#.###.#####.#.###.###.###.#####.###.#####.#####
#.......#...#.#...#.#.#.....#.#.#...#...#...#.#.#.....#.........#...#.....#.....#
#.#######.#.#.#####E#.#.#####.#.#.###.#.#.#.#.#.#.#############.#.#.#####.###.#.#
#...#.....#...#...#...#.#.....#.#...#.#.#.#...#.....#..a#.....#.#.#...#.#...#.#.#
#####.#######.#.###.###.#.###.#.#.###.#.#.###########.#.#.###.###.###.#.###.###.#
#...#.#.#...#.#.#...#...#.#...#.#.#...#.#.....#.....#.#.#.#.#...#...#...#.#...#.#
#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###.###.#####.#.###.#.#.#.#.###.###.###.#.###.#.#
#.#.#.#.#.#.....#.#...#.#.#.#.#.....#.#.#.....#.#...#.#...#...#...#.#.#.#...#..i#
#.#.#.#.#.#######.#####.###.#########.#.#.#####U#.###.#######.###.#.#.#.#.#.#####
#.#n..#.......#...#...#...#.#...#.......#.......#t#...#.........#.#.#.#...#.#...#
#.#############.###.#.###.#.#.#.#.###############.#.###.#.#######.#.#.#####.#.#.#
#...............J...#.....#...#.........#...........#...#.........M.#..p......#.#
#################################################################################`,
REAL_2: `#################################################################################
#.....#...............#.....#.A.#.......#.....#e..............#.....#...........#
#.###.#########.#####.###.#.###.#.###.#.###.#.###.###########.#.#.###.#####.#####
#.#.#.....#...#.#...#.#...#.....#.#.#.#.#...#..m#...#.......#.#.#.#...#.#...#...#
#.#.#####.#.#.#.#.###.#.#########.#.#.###.#####.###.#.#######.###.#.###.#N###.#.#
#.#.#...#...#...#...#.#.....T.......#...#.#...#.....#.#.....#.#...#.....#.#...#.#
#.#.#.#.###########.#.#.###############.#.#.#.#######.#.###.#.#.#.#####.#.#.###.#
#.#...#.......#.....#.#.......#.....#...#.#.#...#.........#j....#.#...#.#.#.#...#
#.###########.#.#.#.#.#########.###.#.#.#.#.###.#.#########.#####.###.#.#.#.#.#.#
#.#.....#...#.#.#.#.#...........#...#.#.#.#...#.#.#...#...#.#...#...#.#.#...#.#.#
#.#P###.#D#.#.#.#.###############.###.#.#.###.#.#.###.#.#.###.#.###.#.#.#####.###
#...#...#.#.#u..#.......#...#.....#...#.#.#...#.......#.#.....#...#...#.....#...#
#####.###.#.#######.###.#.###.#######.#.#.#########.###.#########.#########.###.#
#...#.#...#g......#...#.#...#.#.....#.#.#.#...#...#.#...#.......#.#.........#...#
#.#.#.#.#########.###.#.###.#.###.#.#.#.#.#.#.#.#.###.#######.#.#.#.#########O#.#
#.#...#..d#.....#...#.#.....#.....#...#.#...#...#.....#.....#.#.#...#.....#...#.#
#.#######.#.###F###.#.#################.#.###############.#.#.#.#######.#.#.###.#
#.....#...#..h#...#.#.............#.....#.#.......#.......#...#.....#...#.#.#...#
#.###.#H#####.#.###G#.#######.#####.#####.###.#.#.#.###.###########.#.###.#.#####
#.#.#.#.......#.#...#.....#...#...#.#...#...#.#.#.#...#.#...#.....#...#.#.#.....#
#.#.#.#########.#.#########.###.#.#.###.###.#.#.#.#####.#.#.#####.#####.#.#####.#
#...#.....#.....#b..#...#...#...#...#...#...#.#.#.....#...#.#y..#.......#.....#.#
###.#####.#.#######.###B#.#.#.#######.#.#.#####.#####.#.###.###.#####.#.#.#####.#
#...#...I.#f......#.....#.#.#.#...#...#.#...#...#...#.#.#.....#.....#.#...#.....#
#####.###########.#######.###.#.###.#.#####.#.###.###.###.#########.#######.#####
#o....#k........#.#.#.......#.#.#...#...#.#.#.#.....#.#...#.......#.......K.#...#
#.#####.###.#####.#.#.#####.#.#.#.#####.#.#.#.###.#.#.#.###.###.###############.#
#.#.......#...#.C.#.....#...#.#...#...#.#...#...#.#.#.#...#...#.....#...........#
#.#.#########.#.#########.###.###.#.###.#.#####.#.#.#.###.###.#####.#.#.#######.#
#...#l........#...#.....#...#...#...#...#.......#.#...#...#...#...#...#.X.#...#.#
#.###.#.#########.#V###.###.###.#####.###########.#####.###.###.#########.#.#.#.#
#...#.#.#.....#...#.#.#.#...#.#.....#...#.......#...#...#...#...........#.#.#.#.#
#####.#.#.###.#.###.#.#.#.#.#.#####.###.#.#####.###.#.#.#.###.#######.###.#.#.#W#
#.....#.#.#r#.#.#...#.#.#.#.#.#...#...#.#.#...#...#.#.#.#...#.......#...#.#.#.#.#
#.#######.#.#.#.###.#.#.#.#.#.#.#.###.#.#.###.###.#.#.#.###.###########.#.#.#.#.#
#.........#.#.#.#s..#...#.#.Q.#.#.#...#.#...#...#...#.#.............#...#.#.#...#
#.#########.#.#.#.###.###.#.###.#.#.###.###.#.#.#####.#######.#####.#.###.#.#####
#...#...#...#.#...#...#...#.#...#...#...#.#.#.#.....#...#...#.#...#...#...#...#.#
###.#Y#.###.#.#####.###.#####.#########.#.#.###.###.#####.#.###.#.#####.#####.#.#
#.....#.....#.......#..................@#@......#.........#....q#.......#.......#
#################################################################################
#...#.#.................#..z...........@#@#.......#.............#...............#
#.#.#.#.#.#############.#.#.###########.#.#.#.#####.#####.#####.#.###.#########.#
#.#...#.#.#...#.#.....#.#.#.#.....#...#.#...#.#...Z.....#.#.....#.#.#.#.......#.#
#.#####.#.#.#.#.#.#.#.#.###.#.#####.#.#.#.###.#.#########.#######.#.#.#####.###.#
#.#...#.#...#.#...#.#x#.#...#.#.....#.#.#...#.....#.....#.#...#.....#.#...#.....#
#.#.#.#.#####.#####.###.#.###.#.#####.#.###.#######.###.#.#.#.#.#####.#.#.#####.#
#w..#...#...#.....#.#.....#...#.#.....#.#.#...#.....#.#...#.#...#..v#.#.#.....#.#
#.#######.#.#####.#.#.#####.###.#.#####.#.###.#.#####.#.###.#####.#.#.#.#####.###
#.#.......#.#.#...#.#.#...#.#...#.#...#.#...#.#.#.......#...#...#.#.#.#.#...#...#
#.###.#.###.#.#.###.#.#.#.#.#.###.#.#.#.#.###.#.###.#####.###.#.#.#.#.#.###.###.#
#...#.#...#...#.#.#...#.#.#...#.#.#.#...#...#.#...#.#...#.#...#.R.#.#.........#.#
###.#####.###.#.#.#.###.#.###.#.#.#.#####.#.#.###.#.#.#.#.#.#######.#.#########.#
#.#...#...#.#.#.#.....#.#...#...#.......#.#.#...#.#...#.#.#.#...#...#.#.........#
#.###.#.###.#.#.#######.###.#.#########.#.#.###.#.#######.#.#.###.###.#.#######.#
#...#...#...#.#.........#...#.#...#.....#.#...#.#.........#.#.#...#...#.#.......#
#.#######.#.#.###########.#####.#.#####.###.###.###########.#.#.#######.#########
#.........#.#.#.........#.......#.#...#.#...#...#...........#.#.#.....#.........#
#.###.#######.#.###.#####.#####.#.#.#.###.#.#.###.###########.#.#.###S#########.#
#...#.......#...#...#...#.#...#.#...#...#.#.#...#.....L.#.....#...#...#...#...#.#
#.#########.#####.###.#.###.#.###.#####.#.#####.#######.#.#########.###.#.#.#.#.#
#.#.......#.#...#.#.#.#.#...#...#...#...#...........#...#...#.#....c#...#...#.#.#
###.#####.#.#.#.#.#.###.#.#####.#####.###.###########.#####.#.#.#####.#######.#.#
#...#.......#.#...#...#...#...#...#...#.#...#.........#.....#...#.......#.......#
#.###.#######.#####.#######.#.###.#.###.###.#.###########.#.#########.#.#######.#
#.#.#.#...#...#.............#...#...#...#...#.............#.........#.#.#.....#.#
#.#.#.#.#.#.###########.#####.#.#####.###.#########################.###.#.###.#.#
#.#...#.#.#.....#.....#...#...#.#.#.....#.....#...#.......#.......#...#...#...#.#
#.#####.#.#####.#.###.#####.###.#.#.###.#####.#.###.###.###.#####.###.#####.#####
#.......#...#.#...#.#.#.....#.#.#...#...#...#.#.#.....#.........#...#.....#.....#
#.#######.#.#.#####E#.#.#####.#.#.###.#.#.#.#.#.#.#############.#.#.#####.###.#.#
#...#.....#...#...#...#.#.....#.#...#.#.#.#...#.....#..a#.....#.#.#...#.#...#.#.#
#####.#######.#.###.###.#.###.#.#.###.#.#.###########.#.#.###.###.###.#.###.###.#
#...#.#.#...#.#.#...#...#.#...#.#.#...#.#.....#.....#.#.#.#.#...#...#...#.#...#.#
#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###.###.#####.#.###.#.#.#.#.###.###.###.#.###.#.#
#.#.#.#.#.#.....#.#...#.#.#.#.#.....#.#.#.....#.#...#.#...#...#...#.#.#.#...#..i#
#.#.#.#.#.#######.#####.###.#########.#.#.#####U#.###.#######.###.#.#.#.#.#.#####
#.#n..#.......#...#...#...#.#...#.......#.......#t#...#.........#.#.#.#...#.#...#
#.#############.###.#.###.#.#.#.#.###############.#.###.#.#######.#.#.#####.#.#.#
#...............J...#.....#...#.........#...........#...#.........M.#..p......#.#
#################################################################################`
}

export default INPUT