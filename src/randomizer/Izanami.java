package randomizer;

public class Izanami extends godClass{ 
    public Izanami() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Izanami test = new Izanami();
    System.out.println(test.getDamageType());
    }
}
