const INPUT: { [key:string]: string } = {
DEMO_0:
String.raw`|
v
|
|
|
^
|`,

DEMO_1:
String.raw`/->-\
|   |  /----\
| /-+--+-\  |
| | |  | v  |
\-+-/  \-+--/
  \------/   `,

DEMO_2:
String.raw`/>-<\
|   |
| /<+-\
| | | v
\>+</ |
  |   ^
  \<->/`,

REAL:
String.raw`                      /---------------------\           /----------------<---------------------------------------------------------------------\
                      |                     |           |         /---------------------------\                                                |
              /-------+---------------------+-----------+---------+---------------------------+------\                                         |
   /----------+-------+---------------------+---\      /+---------+---------------------------+------+------\                                  |
 /-+----------+-------+---------------------+---+------++---------+-------------------------\ |      |      |                                  |
 | |          |       |  /------------------+---+------++---------+-----\                   | | /----+------+---------------------------\      |
 | |   /------+-------+--+------------------+---+-\    ||         |     |              /----+-+-+----+------+----------------\          |      |
 | |   |      | /-----+--+------------------+---+-+----++---------+-----+--------------+----+-+-+----+---\  |                |          |      |
 | |   |      | |    /+--+--------------\   |   | |    ||    /----+-----+--------------+----+-+-+----+---+--+----------------+---------\|      |
 | |   |      | |    ||  |              |   |   | |    ||    |    |     |              |    | | |    |   |  |                |         ||      |
 | |   |      | |    ||  |      /-------+---+-\ | |    ||    |    |     |              |    | | |    |   |  |        /-------+---------++------+---\
 | |   |      | |    ||  |      |       |   | | | |    ||    |    |     |     /--------+----+-+-+----+---+\ |        |       |         ||      |   |
 | |   |      | |    ||  |      |       |   | | | |    ||    |/---+-----+\    |        |    | | |    |   || |        |       |         ||      |   |
 | |   |    /-+-+----++--+------+-------+---+-+-+-+----++----++---+-----++--->+--------+----+-+-+----+---++-+-----\  |       |         ||      |   |
 | |   |    | | |   /++--+------+-------+---+-+-+-+----++----++---+-----++----+--------+----+-+-+----+---++-+-----+--+-------+-\       ||      |   |
 | |  /+----+-+-+---+++--+------+-------+---+-+-+-+----++-\  ||   |     ||    |        |    | | |    |   || |     |  |       | |       ||      |   |
 | |  ||    | | |   |||  |      |       |   | | | |    || | /++---+-----++----+--------+----+-+-+-\  |   || |     |  |       | |       ||      |   |
 | |  ||    |/+-+---+++--+------+-------+---+-+-+-+----++-+-+++---+\  /-++----+--\     |    | | | |  |   || |     |  |       | |/------++--\   |   |
 | |  ||    ||| |/--+++--+------+-------+---+-+-+-+----++\| |||   ||  | ||    |  | /---+----+-+-+-+--+---++-+----\|  |       | ||      ||  |   |   |
 | |  ||    ||| ||  |||  |/-----+-------+---+-+-+-+----++++-+++---++--+-++----+--+-+---+----+-+-+-+--+---++-+----++--+-------+-++---\  ||  |   |   |
 | |  ||    ||| ||  |\+--++-----+-------/   | | | |    |||| |||   v|  | ||    |  | |   |    | | | |  |/--++-+----++--+-------+-++---+--++--+---+--\|
/+-+--++----+++-++--+-+--++-----+-----------+-+-+-+----++++-+++---++--+-++----+--+-+-\ \----+-+-+-+--++--++-+----++--+-------/ ||   |  ||  |   |  ||
|| | /++----+++-++--+-+--++-----+-----------+-+-+-+----++++-+++---++--+-++---\|  | | |      | | | |  ||  || |    ||  |         ||   |  ||  |   |  ||
|| | |||    ||| ||  | |  ||     |           | | | |/---++++-+++---++--+-++---++--+-+-+------+-+-+-+--++--++-+----++--+---------++--\|  ||  |   |  ||
|| | |||/---+++-++--+-+--++-----+-----------+-+-+-++---++++-+++---++--+-++---++--+-+-+---\  | | | |  ||  || |    ||  |         ||  ||  ||  |   |  ||
|| | ||||   ||| ||  | |  ||     |           | | | ||   |||| |||   ||  | ||/--++--+-+-+---+--+-+\| |  ||  || |    ||  |         ||  ||  ||  |   |  ||
|| | ||||   ||| || /+-+--++-----+-----------+-+-+-++---++++-+++---++--+-+++--++--+-+-+---+--+-+++-+--++--++-+----++--+-------\ ||  ||  ||  |   |  ||
|| | ||||   ||| \+-++-+--++-----+-----------+-+-+-++---++++-+++---++--+-+++--++--+-+-+---+--+-+++-+--++--/| |    ||  \-------+-++--++--++--+---+--+/
|| | ||||   |||  |/++-+--++-----+-----------+-+-+-++---++++-+++---++--+-+++\ ||  | | |   |  | ||| |  ||   | |    ||          | ||  ||  ||  |   |  |
|| | ||||   |||  |||| |  ||     |           | | | ||   |||| |||   ||  | |||| ||  | | |   |  | ||| |  ||   | |    ||          | ||  ||  ||  |   |  |
|| |/++++---+++--++++-+--++---\ |           | | | ||   |||| |||   ||/-+-++++-++--+-+-+---+--+-+++-+--++---+-+----++----------+-++--++--++--+---+--+\
|| ||||||   |||  |||| |  ||   | |           | | | ||   |||| |\+---+++-+-++++-++--+-+-+---+--+-+++-+--++---+-+----++----------+-++--++--/|  |   |  ||
|| ||||||   |||  |||| |  ||   | |  /--------+-+-+-++---++++-+-+---+++-+-++++-++--+-+-+---+-\| ||| |  ||   | |    ||          | ||  ||   |  |   |  ||
|| ||||||   |||  |||| | /++---+-+--+--------+-+-+-++---++++-+-+---+++-+-++++-++--+-+-+---+-++-+++-+--++-\ | |    || /--------+-++--++---+--+\  |  ||
|| ||||||   |||  |||| | |||   | |  |   /----+-+-+-++---++++-+-+---+++-+-++++-++--+-+-+---+-++-+++-+--++-+-+-+----++-+--------+-++--++---+--++--+-\||
|| ||||||   |||  |||| | |||   | |  |   |    | | | ||  /++++-+-+--\||| | |||| ||  |/+-+---+-++-+++-+--++-+-+-+----++-+--------+-++--++---+--++-\| |||
|| ||||||   |||  |||| | |||  /+-+--+---+----+-+-+-++--+++++-+-+--++++-+-++++-++--+++-+---+-++-+++-+--++-+-+-+----++-+--\     | ||  ||   |  || || |||
|| |||||| /-+++--++++-+-+++--++-+--+---+----+-+\| ||  ||||| | |  |||| | |||| ||  ||| |   | || ||| |  || | | |    || |  |   /-+-++--++---+\ || || |||
|| |||||| | |||  |||| \-+++--++-+--+---+----/ ||| ||  ||||| | |  |||| | |||| ||  ||| |   | || ||| |  || | | |    || |  |   | | ||  ||   || || || |||
|| ||||\+-+-+++--++++---+++--++-+--+---+>-----+++-/|  ||||| | |  |||\-+-++++-++--+++-+---+-++-+++-+--++-+-+-+----++-+--+---+-+-++--++---++-++-++-++/
|| |||| | | |||  ||||   |||  || |  |   |/-----+++--+--+++++-+-+--+++--+-++++-++--+++-+---+-++-+++-+--++-+-+-+-\  || |  |   | | ||  ||   || || || ||
|| |||| | | |||  |\++---+++--++-+--+---++-----+++--+--+++++-+-+--+++--+-+++//++--+++-+---+-++-+++-+--++-+-+-+-+--++-+--+---+\| ||  ||   || || || ||
|| |||| | | |||  | |\---+++--++-+--+---++-----+++--+--+++++-+-+--+++--+>+++-+++--+++-+---+-++-+++-+--++-+-+-+-+--++-+--+---+++-/|  ||   || || || ||
|| |||| | | |||  | |    |||  || |  | /-++-----+++--+--+++++-+-+--+++--+-+++-+++--+++-+---+-++-+++-+--++-+-+-+-+--++-+--+---+++--+--++-<-++-++-++\||
|| |||\-+-+-+++--+-+----+++--++-+--+-+-++-----+++--+--++++/ | |  |||  | ||| |||  ||| |   | || ||| |  || |/+-+-+--++-+--+---+++--+--++---++-++-+++++\
|| |||  | | |||  | |    |||  || |  | | ||     |||  |  ||||  \-+--+++--+-+++-+++--+++-+---+-++-+++-/  || ||| | |  || |  |   |||  |  ||   || || ||||||
|| |||  | | |||  | |    |||  || |  | | ||/----+++--+--++++----+\ |||  | ||| |||  |||/+---+-++-+++----++-+++-+-+--++-+--+---+++--+--++--\|| || ||||||
|| |||  | | |||  | |    |||  || |  |/+-+++----+++--+--++++----++-+++--+-+++-+++--+++++---+-++-+++----++-+++-+-+--++-+--+---+++-\|  ||  ||| || ||||||
|| \++--+-+-+++--+-+----+++--++-+--+++-+++----++/  |  ||||    || |||  \-+++-+++--/||||   | || |||    || ||| | |  || |  |   ||| ||  ||  ||| || ||||||
||  ||  | | |||  | |    |||  || |  ||| |||    ||   |  ||||    || |||    ||| ||\---++++---+-++-+++----++-++/ | |  || |  |   ||| ||  ||  ||| || ||||||
||  ||  | | |||  | |    |||  || |  ||| |||    ||   |  ||||    \+-+++----+/| \+----++++---+-++-+++----++-++--+-+--++-+--+---+/| ||  ||  ||| || ||||||
||  || /+-+-+++--+-+----+++--++-+--+++-+++----++---+--++++-----+-+++----+-+--+----++++---+\|| |||    || ||  | |  || \--+---+-+-++--++--+++-+/ ||||||
||  || || | |||  | |   /+++--++-+--+++-+++----++---+--++++-----+-+++----+-+--+----++++---++++-+++----++-++--+-+--++--\ |   | | ||  ||  ||| |  ||||||
||  || || | |||  | |   ||||  || |  ||| |||    ||   |  ||||     | |\+----+-+--+----++++---++++-/||    || ||  | |  ||  | |   | | ||  ||  ||| |  ||||||
||  || || | |||  | |  /++++--++-+--+++-+++----++---+--++++-----+-+-+----+-+--+----++++---++++--++----++-++--+-+--++--+-+---+-+-++-\||  ||| |  ||||||
||  || || | |||  | |  |||||  || |  ||| |||    ||   |  ||||     | | |    | |  |    ||||   |||| /++----++-++--+-+--++--+\|   |/+-++-+++\ ||| |  ||||||
||  || || | |||  | |  |||||  || |  ||| |||    ||   |/-++++-----+-+-+----+-+--+----++++---++++-+++\   || ||  | |  ||  |||   ||| || |||| ||| |  ||||||
||  || || | |||  | | /+++++--++-+--+++<+++----++---++-++++-----+-+-+----+-+--+----++++---++++-++++---++-++--+\|  ||  |||   ||| || |||| ||| |  ||||||
||  || || | |||  | | ||||||  || |  |\+-+++----++---++-++++-----+-+-+----+-+--+----++++---++++-++++---++-++--+++--++--+++---+++-/| |||| ||| |  ||||||
||  || || | |||  | | |||\++--++-+--+-+-+++----++---++-++++-----+-+-+----+-+--+----++++---++++-++++---++-/|  |||  ||  |||   |||  | |||| ||| |  |^||||
||  || || | |||  | |/+++-++--++-+--+-+-+++----++---++-++++-----+-+-+----+-+--+----++++\  |||| ||||   |\--+--+++--++--+++---+++--+-++++-+++-+--++++/|
||  || || | |||  | ||||| ||  || |  | | |||    ||   || ||||     | | |    | |  |    ||\++--++++-++++---+---+--+++--++--+++---+++--+-++++-/|| |  |||| |
||  || || | |||  | ||||| ||  || |  | | |||    ||   || ||||     | | |    | |  |    || ||  |||| ||||   |   |  |||  ||  |||   |||  | ||||  || |  |||| |
||  || || | \++--+-+++++-++--++-+--+-+-+++----++---++-++++-----+-+-+----+-+--+----++-++--++++-++++---+---+--+++--+/  |||   |||  | ||||  || |  |||| |
||  || || |  ||  | ||||| ||  || |  | | |||    ||   || ||||     | | |    | |  |    || ||  |||| ||||   |   |  |||  |   |||   |||  | ||||  || |  |||| |
||  ||/++-+--++--+-+++++-++--++-+--+-+-+++----++---++-++++-----+-+-+----+-+--+----++-++\ |||| ||||   |   |  |||  |   |||   |||  | ||||  || |  |||| |
||  \++++-+--++--+-+++++-++--+/ |  | | ||| /--++---++-++++-----+-+-+----+-+--+----++-+++-++++-++++>--+---+--+++--+---+++---+++--+\||||  || |  |||| |
||   |||| |  ||  | ||||| |\--+--+--+-+-+++-+--++---++-++++-----+-+-+----+-+--+----++-+++-++++-++++---+---+--+++--+---+++---+++--++++/|  || |  |||| |
||   |||| |  ||  | ||||| |   |  |  | | ||\-+--++---++-++++-----/ | |    |/+--+----++-+++\|||| ||||   |/--+--+++--+---+++---+++--++++-+--++-+-\|||| |
||   |||| |  ||  | ||||| |   |  |  | | ||  |/-++---++-++++-------+-+----+++--+----++-++++++++-++++---++--+--+++--+---+++---+++--++++-+--++\| ||||| |
||   |||| |  ||  | ||||| | /-+--+--+-+-++--++-++---++-++++-------+-+----+++--+----++-++++++++-++++---++--+--+++\ |   |||   |||  |||| |  |||| ||||| |
|\---++++-+--++--+-+++++-+-+-+--+--+-+-++--++-++---++-++++-------+-+----+++--+----++-+++++++/ ||||   ||  |  |||| |   |||   |||  |||| |  |||| ||||| |
|    |||\-+--++--+-+++++-+-+-+--+--+-+-++--++-++---++-++++-------+-+----+++--+----++-++++/||  ||||   ||  |  |||| |   |||   |||  |||| |  |||| ||||| |
|    |||/-+--++--+-+++++-+-+-+--+--+-+-++--++-++---++-++++-------+-+-\  |||  |    || |||| ||  ||||   ||  |  |||| |   |||   |||  |||| |  |||| ||||| |
|    |||| |  ||  | ||||| | | |  |  | | ||  || ||   |\-++++-------+-+-+--+++--+----++-++++-++--+++/   ||  |  |||| |   |||   |||  \+++-+--+++/ ||||| |
|    |||| |  ||  | ||||| | | |/-+--+-+-++--++-++---+--++++-------+-+-+--+++--+----++-++++-++--+++----++--+--++++\|   |||   |||   ||| |  |||  ||||| |
|    |||| |  ||  | ||||| | | || |  | | ||  || || /-+--++++-------+-+-+--+++--+--\ || |||| ||  |||    ||  |  ||||||   |||   |||   ||| |  |||  ||||| |
|    |||| |  ||  | ||||| \-+-++-+--+-+-++--++-++-+-+--++++-------+-+-+--/||  |  | || |||| ||  |||    ||  |  ||||||   |||   |||   ||| |  |||  ||||| |
|    |||| |  ||  | |||||   | || |  | | ||  || || | |  |||| /-----+-+-+---++--+--+-++-++++-++--+++----++--+--++++++---+++---+++\  ||| |  |||  ||||| |
|    |||| |  \+--+-+++++---+-++-+--+-+-++--++-++-+-+--++++-+-----+-/ |   ||  |  | || |||| ||  |||   /++--+--++++++\  |||   |||| /+++-+--+++\ ||||| |
|    |||| \---+--+-+++++---+-++-+--+-+-++--++-+/ v |  |\++-+-----+---+---++--+--+-++-++++-++--+++---+++--+--/||||||  |||   |||| |||| |  |||| ||||| |
|    ||||  /--+--+-+++++--\|/++-+--+-+-++--++-+--+-+--+-++-+-----+---+---++--+--+-++-++++-++--+++---+++--+\  ||||||  |||   |||| |||| |  |||| ||||| |
|    ||||  |  | /+-+++++--+++++-+--+-+-++--++-+--+-+--+-++-+-----+---+---++-\|  | || |||| ||  |||   |||/-++--++++++-\|||   |||| |||| |  |||| ||||| |
|    ||||  |  | || |||||  ||||| |  | | ||  || |  | |  | || |/----+---+---++-++--+-++-++++-++--+++---++++-++--++++++-++++\  |||| |||| |  |||| ||||| |
\----++++--+--+-++-+++++--+++++-+--+-+-++--++-+--+-+--+-++-++----+---+---++-++--+-++-/||| ||  |||   |||| ||  |||||| |||||  |||| |||| |  |||| ||||| |
    /++++--+--+-++-+++++\ |||\+-+--+-+-++--++-+--+-+--+-++-++----+---+---++-++--+-++--+++-++--+++---++++-++--++++++-+++/|  |||| |||| |  |||| ||||| |
    |||||/-+--+-++-++++++-+++-+-+-\| \-++--++-+--+-+--+-++-++----+---+---++-++--+-++--+++-++--+++---++++-++--++++++-+++-+--++++-++++-+--++++-+++/| |
    |||||| |  | || |||||| |\+-+<+-++---++--++-+--+-+--+-++-++----+---+---++-++--+-++--+++-++--+++---++++-++--++/||| ||| |  |||| |||| |  |||| ||| | |
    |||||| |  | || |||||| | | \-+-++---++--++-+--+-+--+-++-++----+---+---++-++--+-++--+++-++--+++---++++-++--++-/|| ||| |  |||| |||| |  |||| ||| | |
    |||||| |  | || |||||| | |   | ||   ||  || |  \-+--+-++-++----+---+---++-++--/ ||  ||| ||  |||   |||| ||  ||  || ||| |  |||| |||| |  |||| ||| | |
    |||||| |  | || |||\++-+-+---+-++---++--++-+----+--+-++-++----+---+---++-++----++--+++-++--+++---++++-++--++--++-+++-+--++++-++/| |  |||| ||| | |
    |||||| |  |/++-+++-++-+-+---+-++---++--++-+----+--+-++-++----+---+---++-++----++--+++-++\ |||   |||| ||  ||  || ||| |  |||| || | |  |||| ||| | |
    |||||| |  |||| ||| || | |   | |\---++--++-+----+--+-++-++----+---+---++-++----++--+++-+/| |||   |||| ||  ||  || ||| |  |||| || | |  |||| ||| | |
    |||||| |  |||| ||| || | |   | |    ||  \+-+----+--+-++-++----+---+---++-++----++--+++-+-+-+++---++++-++--++--++-+++-+--++++-+/ | |  |||| ||| | |
    |||||| |  |||| ||| || | |   | |    ||/--+-+----+--+-++-++---\|   |   || ||    ||  ||| | | |||   |||| ||  ||  || ||| |  |||| |  | |  |||| ||| | |
    |||||| |  |||| ||| || | |   | |    |||  | |    |  | || ||   ||   |   || ||    ||  ||| | | ||\---++++-++--++--++-+++-+--++++-+--+-+--/||| ||| | |
    |||||| |  |||| ||| |^ | |   | |    |||  | |    |  | || ||   ||   |   || ||    ||  |||/+-+-++----++++-++--++--++-+++\|  |||| |  | |   ||| ||| | |
  /-++++++-+--++++\||| || | |   | |    |||  | |    |  | || ||   ||   |   \+-++----++-<++/|| | ||    |||| ||  ||  || |||||  |||| |  | |   ||| ||| | |
  | |||||| \--++++++++-++-/ |   | |    ||| /+-+----+--+-++-++---++---+---\| || /--++--++-++-+-++----++++-++--++--++-+++++--++++-+--+\|   ||| ||| | |
  | ||||||    |||||||| ||   |   | |    ||| || |    |  | || ||   ||   |   || || |  ||  || || | \+----++++-++--++--++-++/||  |||| |  |||   ||| ||| | |
  | ||||||    |||||||| ||   |   | | /--+++-++-+----+--+-++-++---++---+\  || || |  \+--++-++-+--+----++++-++--++--++-++-++--++++-+--+++---+++-+/| | |
  | ||||||    |||||||| ||   |   | | |  ||| || |    | /+-++-++---++---++--++-++-+---+--++-++-+--+----++++-++--++--++-++-++--++++-+--+++---+++-+-+-+-+\
  | ||||||    |||||||| ||   |   | | |  ||| || |    | || \+-++---++---++--++-++-+---+--++-++-+--+----++++-++--++--++-++-++--++++-+--+++---+++-+-/ | ||
  | ||||||    \+++++++-++---+---+-+-+--+++-++-+----+-++--+-++---++---++--++-++-+---+--++-++-+--+----+/|| ||  ||  || || ||  |||| |  |||   ||| |   | ||
  | ||||||     ||||||| ||   |   | | |  ||| || |    | ||  | ||   ||   ||  || || |   |  || || |  |    | || ||  ||  || || ||  |||| |  |||   ||| |   | ||
  | ||||||     ||||||| ||   |   | | |  \++-++-+----+-++--+-++---++---++--++-++-+---+--++-++-+--+----+-++-++--++--++-++-++--++++-+--+++---+++-+---/ ||
  | \+++++-----+++++++-+/   |   \-+-+---++-++-/    | ||  | ||   ||   ||  || || |   \--++-++-+--+----+-++-++--++--/| || ||  |\++-+--++/   ||| |     ||
  |  |v|||/----+++++++-+----+--\  | |   || ||      \-++--+-++---++---++--++-++-+------++-++-+--+----+-++-++--++---+-++-++--+-++-+--/|    ||| |     ||
  |  ||||||    \++++++-+----+--+--+-+---++-++--------++--+-++---++---++--++-++-+------++-++-/  |    | || ||  ||   | || ||  | || |   |    ||| |     ||
  |  ||||||   /-++++++-+----+--+--+-+---++-++--------++--+-++---++---++--++-++-+------++-++----+----+-++\||  ||   | || ||  | || |   |    ||| |     ||
  |  ||||||   | |||||| |    |  |  | |   \+-++--------++--+-++---++---++--++-++-+------++-++----+----+-+++++--+/   | || ||  | || |   |    ||| |     ||
  |  ||||||   | |||||| \----+--+--+-+----+-++--------++--+-++---++---++--++-++-+------++-++----+----+-+++++--+----+-+/ ||  | || |   |    ||| |     ||
  \--++++++---+-++/|||      |  |  | |    | ||        ||  | ||   ||   ||  || || |   /--++-++----+----+-+++++--+----+-+--++\ | || |   |    ||| |     ||
     ||||||   | || |||      |  |  | |    | \+--------++--+-++---++---++--/| || |   |  || ||    |    | |||||  |    | |  ||| | || |   |    ||| |     ||
     \+++++---+-++-+++------+--+--+-+----+--+--------++--+-++---++---++---+-+/ \---+--++-++----+----+-+++++--+----+-+--+++-+-++-+---/    ||| |     ||
      ||||| /-+-++-+++------+--+--+-+----+--+--------++--+-++---++---++---+-+------+--++-++----+----+-+++++--+\   | |  ||| \-++-+--------/|| |     ||
      ||||| | | || |||      \--+--+-+----+--+--------++--+-++---++---++---+-+->----+--++-++----+----+-++++/  ||   | |  |||   || |         || |     ||
      ||||| | | || |||         |  | |    |  |        |\--+-++---+/   ||/--+-+------+--++-++----+---\| |\++---++---+-/  |||   || |         || |     ||
 /----+++++-+-+-++\|||         |  | |    \--+--------+---+-++---/    |||  | |      |  || ||    |   || | |\---++---+----+++---++-+---------++-+-----/|
 |    ||||| | | ||||||         |  | |       |        |   | ||        |||  | |      |  || ||    |   || | |    ||   |    |||   || |         || |      |
 |    ||||| | | |\++++---------+--+-+-------+--------+---/ ||        |||  | |      |  || ||    |   || | |    ||   |    |||   || |         || |      |
 |    ||||| | | | ||||         |  | |       |        |     ||   /----+++--+-+------+--++-++----+---++-+-+----++---+----+++---++-+------\  || |      |
 |    ||||| | | | ||||         |  | |       |        \-----++---+----+++--+-+------+--++-++----+---++-+-+----++---+----+++---++-+------+--++-+------/
 |    ||||| | | | ||||         |  | \-------+--------------++---+----+/|  | |      |  || ||    |   || | |    ||   |    ||| /-++-+------+-\|| |
 |    ||||| | | | ||||         |  |         |              \+---+----+-+--+-+------+--++-++----+---++-+-+----++---+----+++-+-+/ |      | ||| |
 |    ||||| | \-+-++++---------+--+---------+---------------+---+----+-+--+-+------+--++-++----+---++-+-/    ||   |    ||| | |  |      | ||| |
 |    ||||| |   | |||\---------+--+---------+---------------+---+----+-+--+-+------+--++-++----+---++-+------/|   |    ||| | |  |      | ||| |
 |/---+++++-+---+-+++-\        |  |     /---+---------------+---+----+-+--+-+------+--++-++----+---++-+-------+---+----+++-+-+--+------+\||| |
 \+---+++++-+---+-/|| |        |  |     |   |               |/--+----+-+--+-+------+--++-++----+---++-+-----\ |   |    ||| | |  |      ||||| |
  |   \++++-+---+--++-+--------+--+-----+---+---------------++--+----+-+--+-+------+--+/ ||    |   || |     | |   |    ||| | |  \------++++/ |
  |    |||| |   |  || |        |  |     |   |               ||  |    | |  \-+------+--+--++----/   || |     | |   |    ||| | |         ||||  |
  |    |||| |   |  || |        |  |     v   |               ||  |    | |    |      |  |  \+--------++-+-----+-+---+----/|| | |         ||||  |
  |    ||\+-+---+--++-+--------+--/     |   |               ||  |    | |    |      |  |   |        |\-+-----+-+---/     || | |         ||||  |
  |    || | |   |  \+-+--------+--------+---+---------------++--+----+-+----+------+--+---+--------+--+----<+-+---------++-+-/         ||||  |
  |    || | |   |   \-+--------+--------+---+---------------++--+----+-+----+------+--/   |        |  |     | |         || \-----------++/|  |
  |    \+-+-+---+-----+--------+--------+---+---------------++--+----+-+----+------+------/        |  |     | |         ||             || |  |
  |     | | |   |     |        |        \---+---------------++--+----+-+----+------+---------------+--+-----+-+---------++-------------+/ |  |
  |     | | |   |     |        |            |               ||  |    | |    |      |               |  |     | |         ||             |  |  |
  |     | | \---+-----+--------+------------+---------------++--+----+-+----+------+---------------+--+-----+-/         ||             |  |  |
  |     | |     \-----+--------+------------+---------------++--+----+-+----/      |               |  |     |           ||             |  |  |
  |     | |           |        |            |    /----------++--+----+-+-----------+---------------+--+-----+-----------++----\        |  |  |
  |     | |           |        |            |    |          \+--+----+-+-----------+---------------+--+-----+-----------/|    |        |  |  |
  \-----+-+-----------/        |            |    |           \--+----+-+-----------+---------------+--+-----/            |    |        |  |  |
        | |                    |            \----+--------------+----+-+-----------+---------------+--+------------------+----+--------+--/  |
        | |                    |                 |              |    | |           \---------------+--+------------------/    |        |     |
        \-+--------------------+-----------------+--------------+----/ |                           |  |                       |        |     |
          |                    |                 |              |      \---------------------------/  |                       |        |     |
          \--------------------/                 |              \-------------------------------------+-----------------------+--------/     |
                                                 |                                                    \-----------------------+--------------/
                                                 \----------------------------------------------------------------------------/                       `
}

export default INPUT