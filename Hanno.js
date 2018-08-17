/**
 *author:doulu
 *create time:2018-08-16
 *description:汉诺塔问题
 * https://www.cnblogs.com/dmego/p/5965835.html
 */
{
    let moveNum = 0;
    function move(disks,N,M) {
        console.log("第" + (++moveNum) +" 次移动 : " +" 把 "+ disks+" 号圆盘从 " + N +" ->移到->  " + M);
    }
    function hanno(n,A,B,C) {
        if( n===1){
            move(1,A,C);
        }else {
            hanno(n-1,A,C,B);
            move(n,A,C);
            hanno(n-1,B,A,C);
        }
    }

    hanno(3,'A','B','C');
}