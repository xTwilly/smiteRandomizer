package randomizer;

public class Danzaburou extends godClass{ 
    public Danzaburou() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Danzaburou test = new Danzaburou();
    System.out.println(test.getDamageType());
    }
}
