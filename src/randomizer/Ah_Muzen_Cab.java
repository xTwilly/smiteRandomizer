package randomizer;

public class Ah_Muzen_Cab extends godClass{ 
    public Ah_Muzen_Cab() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Ah_Muzen_Cab test = new Ah_Muzen_Cab();
    System.out.println(test.getDamageType());
    }
}
