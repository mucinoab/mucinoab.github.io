use std::fs;

fn main() {
    let contents = fs::read_to_string("./total_cases.csv").expect("Archivo no encontrado");
    let mut lines = contents.lines();

    let paises: Vec<_> = lines.next().unwrap().split(",").collect();
    let muertes: Vec<_> = lines.last().unwrap().split(",").collect();

    println!("Country,Deaths");

    for x in 0..paises.len() {
        println!("{},{}", paises[x], muertes[x]);
    }
}
